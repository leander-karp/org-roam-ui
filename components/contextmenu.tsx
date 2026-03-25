import React from 'react';
import { OrgRoamNode } from '../api';
import { openNodeInEmacs, createNodeInEmacs } from '../util/webSocketFunctions';
import {
  BiNetworkChart,
  EditIcon,
  IconButton,
  MinusIcon,
  PlusIcon,
  PlusSquareIcon,
  ViewIcon,
} from './IconButton';
import VStack from './VStack';
import { styled } from '@linaria/react';

export default interface ContextMenuProps {
  target: OrgRoamNode | null;
  coordinates: { [direction: string]: number | string };
  handleLocal: (node: OrgRoamNode, add: string) => void;
  scope: { nodeIds: string[] };
  webSocket: any;
  setPreviewNode: any;
}

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ContextMenuTitle = styled.h4`
  font-size: 14pt;
  font-weight: normal;
  font-style: italic;
`;

export const ContextMenu = ({
  target,
  coordinates,
  handleLocal,
  scope,
  webSocket,
  setPreviewNode,
}: ContextMenuProps) => (
  <VStack
    style={{
      zIndex: 128,
      position: 'absolute',
      maxWidth: '12rem',
      left: coordinates.left,
      top: coordinates.top,
      right: coordinates.right,
      bottom: coordinates.bottom,
      backgroundColor: 'var(--theme-color-alt-100)',
      padding: '0.5rem',
      boxShadow: '0.5rem',
      border: '1px solid var(--theme-color-gray-800)',
    }}
  >
    {target && <ContextMenuTitle>{target.title}</ContextMenuTitle>}
    {scope.nodeIds.length !== 0 && (
      <>
        <MenuItemContainer>
          <IconButton
            id="expand-local-graph"
            onClick={() => handleLocal(target!, 'add')}
            size={'2rem'}
          >
            <PlusSquareIcon />
          </IconButton>
          <label htmlFor="expand-local-graph">Expand local graph at node</label>
        </MenuItemContainer>
        <MenuItemContainer>
          <IconButton
            id="open-local-graph"
            onClick={() => handleLocal(target!, 'replace')}
            size={'2rem'}
          >
            <BiNetworkChart />
          </IconButton>
          <label htmlFor="open-local-graph">
            Open local graph for this node
          </label>
        </MenuItemContainer>
        <MenuItemContainer>
          <IconButton
            id="exclude-node"
            onClick={() => handleLocal(target!, 'remove')}
            size={'1rem'}
          >
            <MinusIcon />
          </IconButton>
          <label htmlFor="exclude-node">Exclude node from local graph</label>
        </MenuItemContainer>
      </>
    )}
    {!target?.properties?.FILELESS ? (
      <MenuItemContainer>
        <IconButton
          id={'open-in-emacs'}
          onClick={() => openNodeInEmacs(target as OrgRoamNode, webSocket)}
          size={'2rem'}
        >
          <EditIcon />
        </IconButton>
        <label htmlFor="open-in-emacs">Open in Emacs</label>
      </MenuItemContainer>
    ) : (
      <MenuItemContainer>
        <IconButton
          size="2rem"
          onClick={() => createNodeInEmacs(target, webSocket)}
          id={'create-node'}
        >
          <PlusIcon />
        </IconButton>
        <label htmlFor="create-node">Create node</label>
      </MenuItemContainer>
    )}
    {scope.nodeIds.length === 0 && (
      <MenuItemContainer>
        <IconButton
          onClick={() => handleLocal(target!, 'replace')}
          id={'open-local-graph'}
          size={'2rem'}
        >
          <BiNetworkChart />
        </IconButton>
        <label htmlFor="open-local-graph">Open local graph</label>
      </MenuItemContainer>
    )}
    <MenuItemContainer>
      <IconButton
        size={'2rem'}
        id={'preview-button'}
        onClick={() => {
          setPreviewNode(target);
        }}
      >
        <ViewIcon />
      </IconButton>
      <label htmlFor="preview-button">Preview</label>
    </MenuItemContainer>
  </VStack>
);
