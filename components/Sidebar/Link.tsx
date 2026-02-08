import React, { useContext } from 'react';
import 'katex/dist/katex.css';
import { ThemeContext } from '../../util/themecontext';
import { NodeByCite, NodeById } from '../Home';
import { colorToCSSVarMap } from '../themes2';
import { styled } from '@linaria/react';

export interface LinkProps {
  href: any;
  children: any;
  setPreviewNode: any;
  setSidebarHighlightedNode: any;
  nodeByCite: NodeByCite;
  nodeById: NodeById;
  openContextMenu: any;
  noUnderline?: boolean;
}

const Link = styled.a<{ highlightColor: keyof typeof colorToCSSVarMap }>`
  color: ${(props) => colorToCSSVarMap[props.highlightColor]};

  &[href^='http']::after {
    display: inline-block;
    margin-left: 0.25em;
    width: 0.75rem;
    height: 0.75rem;
    content: '';
    background-color: ${(props) => colorToCSSVarMap[props.highlightColor]};
    mask-size: contain;
    /* SVG taken from react-icons */
    mask: url('data:image/svg+xml;utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" stroke-linecap="round" stroke-width="2"/></svg>')
      no-repeat center;
  }
`;

const NodeLink = styled.button<{
  noUnderline?: boolean;
  highlightColor: keyof typeof colorToCSSVarMap;
}>`
  display: inline;
  overflow: hidden;
  font-weight: 500;
  text-decoration: ${(props) => (props.noUnderline ? 'none' : 'underline')};
  color: ${(props) => colorToCSSVarMap[props.highlightColor]};
  cursor: pointer;
`;

export const PreviewLink = ({
  href,
  children,
  nodeById,
  setSidebarHighlightedNode,
  setPreviewNode,
  nodeByCite,
  openContextMenu,
  noUnderline,
}: LinkProps) => {
  // TODO figure out how to properly type this
  // see https://github.com/rehypejs/rehype-react/issues/25
  const [type, uri] = href.split(':');
  const { highlightColor } = useContext(ThemeContext);

  if (type.startsWith('http')) {
    return (
      <Link
        highlightColor={highlightColor as keyof typeof colorToCSSVarMap}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        {children}
      </Link>
    );
  } else if (type === 'id' || type == 'cite') {
    return (
      <NodeLink
        noUnderline={noUnderline}
        highlightColor={highlightColor as keyof typeof colorToCSSVarMap}
        key={nodeById[uri]?.title ?? nodeByCite[uri]?.id}
        onContextMenu={(e) => {
          e.preventDefault();
          openContextMenu(nodeById[uri], e);
        }}
        tabIndex={0}
        onClick={() => setPreviewNode(nodeById[uri])}
        onMouseEnter={() => setSidebarHighlightedNode(nodeById[uri])}
        onMouseLeave={() => setSidebarHighlightedNode({})}
      >
        {children}
      </NodeLink>
    );
  }
  return <>{children}</>;
};
