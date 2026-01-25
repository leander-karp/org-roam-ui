import React from 'react';
import {
  Menu,
  MenuItem,
  MenuList,
  Heading,
  MenuDivider,
} from '@chakra-ui/react';
import {
  EditIcon,
  AddIcon,
  ViewIcon,
  ExternalLinkIcon,
  PlusSquareIcon,
  MinusIcon,
} from '@chakra-ui/icons';

import { OrgRoamNode } from '../api';
import { openNodeInEmacs, createNodeInEmacs } from '../util/webSocketFunctions';
import { BiNetworkChart } from 'react-icons/bi';
import { TagMenu } from './TagMenu';
import { initialFilter, TagColors } from './config';

export default interface ContextMenuProps {
  background: boolean;
  target: OrgRoamNode | string | null;
  nodeType?: string;
  coordinates: { [direction: string]: number | undefined };
  handleLocal: (node: OrgRoamNode, add: string) => void;
  menuClose: () => void;
  scope: { nodeIds: string[] };
  webSocket: any;
  setPreviewNode: any;
  setTagColors: any;
  tagColors: TagColors;
  setFilter: any;
  filter: typeof initialFilter;
}

export const ContextMenu = ({
  target,
  coordinates,
  handleLocal,
  menuClose,
  scope,
  webSocket,
  setPreviewNode,
  setTagColors,
  tagColors,
  setFilter,
  filter,
}: ContextMenuProps) => (
  <Menu defaultIsOpen closeOnBlur={false} onClose={() => menuClose()}>
    <MenuList
      zIndex="overlay"
      bgColor="white"
      color="black"
      position="absolute"
      left={coordinates.left}
      top={coordinates.top}
      right={coordinates.right}
      bottom={coordinates.bottom}
      fontSize="xs"
      boxShadow="xl"
    >
      {typeof target !== 'string' ? (
        <>
          {target && (
            <>
              <Heading size="xs" isTruncated px={3} py={1}>
                {target.title}
              </Heading>
              <MenuDivider borderColor="gray.500" />
            </>
          )}
          {scope.nodeIds.length !== 0 && (
            <>
              <MenuItem
                onClick={() => handleLocal(target!, 'add')}
                icon={<PlusSquareIcon />}
              >
                Expand local graph at node
              </MenuItem>
              <MenuItem
                onClick={() => handleLocal(target!, 'replace')}
                icon={<BiNetworkChart />}
              >
                Open local graph for this node
              </MenuItem>
              <MenuItem
                onClick={() => handleLocal(target!, 'remove')}
                icon={<MinusIcon />}
              >
                Exclude node from local graph
              </MenuItem>
            </>
          )}
          {!target?.properties?.FILELESS ? (
            <MenuItem
              icon={<EditIcon />}
              onClick={() => openNodeInEmacs(target as OrgRoamNode, webSocket)}
            >
              Open in Emacs
            </MenuItem>
          ) : (
            <MenuItem
              icon={<AddIcon />}
              onClick={() => createNodeInEmacs(target, webSocket)}
            >
              Create node
            </MenuItem>
          )}
          {target?.properties?.ROAM_REFS && (
            <MenuItem icon={<ExternalLinkIcon />}>Open in Zotero</MenuItem>
          )}
          {scope.nodeIds.length === 0 && (
            <MenuItem
              icon={<BiNetworkChart />}
              onClick={() => handleLocal(target!, 'replace')}
            >
              Open local graph
            </MenuItem>
          )}
          <MenuItem
            icon={<ViewIcon />}
            onClick={() => {
              setPreviewNode(target);
            }}
          >
            Preview
          </MenuItem>
        </>
      ) : (
        <TagMenu {...{ target, tagColors, filter, setTagColors, setFilter }} />
      )}
    </MenuList>
  </Menu>
);
