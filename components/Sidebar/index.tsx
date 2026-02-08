import React, { useContext, useEffect, useState } from 'react';
import { Toolbar } from './Toolbar';
import { Note } from './Note';
import { Title } from './Title';
import { NodeObject } from 'force-graph';
import { OrgRoamNode } from '../../api';
import { LinksByNodeId, NodeByCite, NodeById, Scope } from '../Home';
import { Resizable } from 're-resizable';
import { ThemeContext } from '../../util/themecontext';
import { themes2 } from '../themes2';
import VStack from '../VStack';
import { IconButton, BiDotsVerticalRounded } from '../IconButton';
import { styled } from '@linaria/react';

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const SidebarContainer = styled.div`
  background-color: var(--theme-color-alt-100);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;


export interface SidebarProps {
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

  const [justificationIndex, setJustificationIndex] = useState(1);
  const [outline, setOutline] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [font, setFont] = useState('sans serif');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [indent, setIndent] = useState(0);
  const [collapse, setCollapse] = useState(false);
  //maybe want to close it when clicking outside, but not sure
  //const outsideClickRef = useRef();
  return (
    <Resizable
      size={{ height: '100vh', width: sidebarWidth }}
      onResizeStop={(e, direction, ref, d) => {
        setSidebarWidth((curr: number) => curr + d.width);
      }}
      enable={{ left: true }}
      minWidth="220px"
      maxWidth={windowWidth - 200}
    >
      <SidebarContainer className={themes2[emacsTheme[0]]}>
        <MenuContainer>
          <Toolbar
            {...{
              setJustificationIndex,
              setIndent,
              setFont,
              justificationIndex,
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
          <IconButton
            aria-label="Options"
            onClick={(e) => {
              openContextMenu(previewNode, e, {
                left: undefined,
                top: 12,
                right: -windowWidth + 20,
                bottom: undefined,
              });
            }}
          >
            <BiDotsVerticalRounded />
          </IconButton>
        </MenuContainer>
        {previewRoamNode && (
          <VStack style={{ paddingLeft: '1rem', overflow: 'auto' }}>
            <Title>{previewRoamNode?.title}</Title>
            <Note
              {...{
                setPreviewNode,
                previewNode,
                nodeById,
                nodeByCite,
                setSidebarHighlightedNode,
                justificationIndex,
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
      </SidebarContainer>
    </Resizable>
  );
};

export default Sidebar;
