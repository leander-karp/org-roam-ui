import React from 'react';
import { NodeObject } from 'force-graph';

import { NodeById, NodeByCite, LinksByNodeId } from '../Home';
import { UniOrg } from '../../util/uniorg';
import { Backlinks } from './Backlinks';
import { viewerNoteStyle, outlineNoteStyle } from './noteStyle';

import { styled } from '@linaria/react';

const NoteContainer = styled.div<{
  textAlign: 'start' | 'end' | 'justify' | 'center';
}>`
  padding-right: 2rem;
  padding-top: 0.5rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  text-align: ${(props) => props.textAlign};
`;

export interface NoteProps {
  setPreviewNode: any;
  previewNode: NodeObject;
  nodeById: NodeById;
  nodeByCite: NodeByCite;
  setSidebarHighlightedNode: any;
  justification: number;
  justificationList: string[];
  linksByNodeId: LinksByNodeId;
  openContextMenu: any;
  outline: boolean;
  collapse: boolean;
  macros?: { [key: string]: string };
  attachDir: string;
  useInheritance: boolean;
}

export const Note = ({
  setPreviewNode,
  justificationList,
  justification,
  previewNode,
  nodeById,
  nodeByCite,
  setSidebarHighlightedNode,
  linksByNodeId,
  openContextMenu,
  outline,
  collapse,
  macros,
  attachDir,
  useInheritance,
}: NoteProps) => (
  <NoteContainer
    textAlign={justificationList[justification] as unknown as any}
    className={outline ? outlineNoteStyle : viewerNoteStyle}
  >
    {previewNode?.id && (
      <>
        <UniOrg
          {...{
            setPreviewNode,
            previewNode,
            nodeByCite,
            setSidebarHighlightedNode,
            openContextMenu,
            outline,
            collapse,
            nodeById,
            linksByNodeId,
            macros,
            attachDir,
            useInheritance,
          }}
        />
        <Backlinks
          {...{
            setPreviewNode,
            previewNode,
            nodeById,
            linksByNodeId,
            nodeByCite,
            setSidebarHighlightedNode,
            openContextMenu,
          }}
        />
      </>
    )}
  </NoteContainer>
);
