import { unified } from 'unified';
import * as prod from 'react/jsx-runtime';
import uniorgParse from 'uniorg-parse';
import uniorg2rehype from 'uniorg-rehype';
import uniorgSlug from 'uniorg-slug';
import extractKeywords from 'uniorg-extract-keywords';
import katex from 'rehype-katex';
import rehype2react from 'rehype-react';
import { PreviewLink } from '../components/Sidebar/Link';
import { LinksByNodeId, NodeByCite, NodeById } from '../components/Home';
import React, { ReactNode, useMemo } from 'react';
import { OrgImage } from './OrgImage';
import { Section } from './Section';
import { NoteContext } from './NoteContext';
import { OrgRoamNode } from '../api';

import { styled } from '@linaria/react';

const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

const OrgBlockquote = styled.blockquote`
  color: #1a202c;
  background-color: #cbd5e0;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  margin-top: 0.75rem;
  padding-left: 1rem;
  border-left-width: 4px;
  border-left-color: #2d3748;
  border-left-style: solid;
  font-style: italic;
`;

export interface ProcessedOrgProps {
  nodeById: NodeById;
  previewNode: OrgRoamNode;
  setPreviewNode: any;
  previewText: any;
  nodeByCite: NodeByCite;
  setSidebarHighlightedNode: any;
  openContextMenu: any;
  outline: boolean;
  collapse: boolean;
  linksByNodeId: LinksByNodeId;
  macros: { [key: string]: string };
}

export const ProcessedOrg = ({
  nodeById,
  setSidebarHighlightedNode,
  setPreviewNode,
  previewText,
  nodeByCite,
  previewNode,
  openContextMenu,
  outline,
  collapse,
  linksByNodeId,
  macros,
}: ProcessedOrgProps) => {
  if (!previewNode) return null;
  if (!linksByNodeId) return null;

  const orgProcessor: any = unified()
    .use(uniorgParse)
    .use(extractKeywords)
    .use(uniorgSlug)
    .use(uniorg2rehype, { useSections: true });

  const processor = useMemo(
    () =>
      orgProcessor
        .use(katex, {
          trust: (context: any) =>
            ['\\htmlId', '\\href'].includes(context.command),
          macros: {
            '\\eqref': '\\href{###1}{(\\text{#1})}',
            '\\ref': '\\href{###1}{\\text{#1}}',
            '\\label': '\\htmlId{#1}{}',
            ...macros,
          },
        })
        .use(rehype2react, {
          ...production,
          components: {
            a: ({ children, href }: { children: unknown; href: unknown }) => {
              return (
                <PreviewLink
                  nodeByCite={nodeByCite}
                  setSidebarHighlightedNode={setSidebarHighlightedNode}
                  href={`${href as string}`}
                  nodeById={nodeById}
                  setPreviewNode={setPreviewNode}
                  openContextMenu={openContextMenu}
                >
                  {children}
                </PreviewLink>
              );
            },
            img: ({ src }: { src: string }) => {
              return <OrgImage src={src} file={previewNode?.file} />;
            },
            section: ({
              children,
              className,
            }: {
              children: ReactNode;
              className: string;
            }) => {
              if (className && className.slice(-1) === `${previewNode.level}`) {
                return <div>{(children as React.ReactElement[]).slice(1)}</div>;
              }
              return (
                <Section
                  {...{ outline, collapse }}
                  className={className as string}
                >
                  {children}
                </Section>
              );
            },
            blockquote: ({ children }: { children: ReactNode }) => {
              return <OrgBlockquote>{children}</OrgBlockquote>;
            },
            p: ({ children }: { children: ReactNode }) => <p>{children}</p>,
          },
        }),
    [previewNode?.id]
  );

  const text = useMemo(
    () => processor.processSync(previewText).result,
    [previewText]
  );
  return (
    <NoteContext.Provider value={{ collapse, outline }}>
      {text as ReactNode}
    </NoteContext.Provider>
  );
};
