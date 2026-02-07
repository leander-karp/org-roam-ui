import { LinksByNodeId, NodeByCite, NodeById } from '../Home';

import { NodeObject, LinkObject } from 'force-graph';

import React from 'react';
import VStack from '../VStack';

export interface BacklinksProps {
  previewNode: NodeObject | OrgRoamNode;
  setPreviewNode: any;
  nodeById: NodeById;
  linksByNodeId: LinksByNodeId;
  nodeByCite: NodeByCite;
  setSidebarHighlightedNode: OrgRoamNode;
  openContextMenu: any;
}

import { PreviewLink } from './Link';
import { OrgRoamNode } from '../../api';
import { normalizeLinkEnds } from '../../util/normalizeLinkEnds';

import { styled } from '@linaria/react';

const BacklinksContainer = styled.div`
  background-color: var(--theme-color-white);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0 2rem 0;
`;

const BacklinksHeading = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const Backlinks = ({
  previewNode,
  setPreviewNode,
  setSidebarHighlightedNode,
  nodeById,
  linksByNodeId,
  nodeByCite,
  openContextMenu,
}: BacklinksProps) => {
  const links = linksByNodeId[(previewNode as OrgRoamNode)?.id] ?? [];

  const backLinks = links
    .filter((link: LinkObject) => {
      const [source] = normalizeLinkEnds(link);
      return source !== previewNode?.id;
    })
    .map((l) => l.source);

  return (
    <BacklinksContainer>
      <BacklinksHeading>{`Linked References (${backLinks.length})`}</BacklinksHeading>
      <VStack>
        {previewNode?.id &&
          backLinks.map((link) => (
            <div style={{ overflow: 'hidden', width: '100%' }} key={link}>
              <PreviewLink
                nodeByCite={nodeByCite}
                setSidebarHighlightedNode={setSidebarHighlightedNode}
                href={`id:${link as string}`}
                nodeById={nodeById}
                setPreviewNode={setPreviewNode}
                openContextMenu={openContextMenu}
                noUnderline
              >
                {nodeById[link as string]?.title}
              </PreviewLink>
            </div>
          ))}
      </VStack>
    </BacklinksContainer>
  );
};
