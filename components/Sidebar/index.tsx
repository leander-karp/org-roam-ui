import React, { useContext, useEffect, useState } from 'react';

import { Toolbar } from './Toolbar';
import { Note } from './Note';
import { Title } from './Title';

import { VStack, Flex, Box, IconButton } from '@chakra-ui/react';
import { Collapse } from './Collapse';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import { NodeObject } from 'force-graph';
import { OrgRoamNode } from '../../api';
import { LinksByNodeId, NodeByCite, NodeById, Scope } from '../Home';
import { Resizable } from 're-resizable';
import { ThemeContext } from '../../util/themecontext';
import { themes2 } from '../themes2';

export interface SidebarProps {
  isOpen: boolean;
  onClose: any;
  onOpen: any;
  nodeById: NodeById;
  previewNode: NodeObject;
  setPreviewNode: any;
  linksByNodeId: LinksByNodeId;
  nodeByCite: NodeByCite;
  setSidebarHighlightedNode: any;
  canUndo: any;
  canRedo: any;
  resetPreviewNode: any;
  previousPreviewNode: any;
  nextPreviewNode: any;
  openContextMenu: any;
  scope: Scope;
  setScope: any;
  windowWidth: number;
  macros?: { [key: string]: string };
  attachDir: string;
  useInheritance: boolean;
}

const Sidebar = ({
  isOpen,
  onOpen,
  onClose,
  previewNode,
  setPreviewNode,
  nodeById,
  linksByNodeId,
  nodeByCite,
  setSidebarHighlightedNode,
  canUndo,
  canRedo,
  resetPreviewNode,
  previousPreviewNode,
  nextPreviewNode,
  openContextMenu,
  windowWidth,
  macros,
  attachDir,
  useInheritance,
}: SidebarProps) => {
  const [previewRoamNode, setPreviewRoamNode] = useState<
    OrgRoamNode | undefined
  >();
  const [sidebarWidth, setSidebarWidth] = useState<number>(400);
  const { emacsTheme } = useContext(ThemeContext);


  useEffect(() => {
    if (!previewNode?.id) {
      onClose();
      return;
    }
    onOpen();
    setPreviewRoamNode(previewNode as OrgRoamNode);
  }, [previewNode?.id]);

  const [justification, setJustification] = useState(1);
  const [outline, setOutline] = useState(false);
  const justificationList = ['justify', 'start', 'end', 'center'];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [font, setFont] = useState('sans serif');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [indent, setIndent] = useState(0);
  const [collapse, setCollapse] = useState(false);
  //maybe want to close it when clicking outside, but not sure
  //const outsideClickRef = useRef();
  return (
    <Collapse
      animateOpacity={false}
      dimension="width"
      in={isOpen}
      unmountOnExit
      style={{ height: '100vh' }}
    >
      <Resizable
        size={{ height: '100vh', width: sidebarWidth }}
        onResizeStop={(e, direction, ref, d) => {
          setSidebarWidth((curr: number) => curr + d.width);
        }}
        enable={{
          top: false,
          right: false,
          bottom: false,
          left: true,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
        minWidth="220px"
        maxWidth={windowWidth - 200}
      >
        <Flex
          flexDir="column"
          h="100vh"
          pl={2}
          color="black"
          bg="alt.100"
          width="100%"
          className={themes2[emacsTheme[0]]}
        >
          <Flex pl={2} alignItems="center" color="black" width="100%">
            <Flex pt={1} flexShrink={0}>
              <Toolbar
                {...{
                  setJustification,
                  setIndent,
                  setFont,
                  justification,
                  setPreviewNode,
                  canUndo,
                  canRedo,
                  resetPreviewNode,
                  previousPreviewNode,
                  nextPreviewNode,
                  outline,
                  setOutline,
                  collapse,
                  setCollapse,
                }}
              />
            </Flex>
            <Flex
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
              onContextMenu={(e) => {
                e.preventDefault();
                openContextMenu(previewNode, e);
              }}
            ></Flex>
            <Flex flexDir="row" ml="auto">
              <IconButton
                m={1}
                icon={<BiDotsVerticalRounded />}
                aria-label="Options"
                variant="subtle"
                onClick={(e) => {
                  openContextMenu(previewNode, e, {
                    left: undefined,
                    top: 12,
                    right: -windowWidth + 20,
                    bottom: undefined,
                  });
                }}
              />
            </Flex>
          </Flex>
          <Scrollbars
            autoHide
            renderThumbVertical={({ style, ...props }) => (
              <Box
                style={{
                  ...style,
                  borderRadius: 0,
                }}
                {...props}
              />
            )}
          >
            {previewRoamNode && (
              <VStack
                flexGrow={1}
                alignItems="left"
                bg="alt.100"
                paddingLeft={4}
              >
                <Title>{previewRoamNode?.title}</Title>
                <Note
                  {...{
                    setPreviewNode,
                    previewNode,
                    nodeById,
                    nodeByCite,
                    setSidebarHighlightedNode,
                    justification,
                    justificationList,
                    linksByNodeId,
                    openContextMenu,
                    outline,
                    setOutline,
                    collapse,
                    macros,
                    attachDir,
                    useInheritance,
                  }}
                />
              </VStack>
            )}
          </Scrollbars>
        </Flex>
      </Resizable>
    </Collapse>
  );
};

export default Sidebar;
