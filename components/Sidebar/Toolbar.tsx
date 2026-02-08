import React from 'react';
import {
  IconButton,
  ChevronLeftIcon,
  ChevronRightIcon,
  BiAlignJustify,
  BiAlignLeft,
  BiAlignMiddle,
  BiAlignRight,
  MdOutlineExpand,
  MdOutlineCollapse,
  IoIosListBox,
  IoMdListBox,
} from '../IconButton';
import { styled } from '@linaria/react';

export interface ToolbarProps {
  setJustification: any;
  justification: number;
  setIndent: any;
  setFont: any;
  setPreviewNode: any;
  canUndo: any;
  canRedo: any;
  resetPreviewNode: any;
  previousPreviewNode: any;
  nextPreviewNode: any;
  outline: boolean;
  setOutline: any;
  collapse: boolean;
  setCollapse: any;
}

const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding-top: 0.25rem;
`;

export const Toolbar = ({
  setJustification,
  justification,
  canUndo,
  canRedo,
  previousPreviewNode,
  nextPreviewNode,
  outline,
  setOutline,
  collapse,
  setCollapse,
}: ToolbarProps) => (
  <ToolbarContainer>
    <IconButton
      title="Go backward"
      aria-label="Privious node"
      onClick={() => previousPreviewNode()}
      disabled={!canUndo}
    >
      <ChevronLeftIcon />
    </IconButton>
    <IconButton
      title="Go forward"
      aria-label="Next node"
      onClick={() => nextPreviewNode()}
      disabled={!canRedo}
    >
      <ChevronRightIcon />
    </IconButton>
    <IconButton
      title="Justify content"
      aria-label="Justify content"
      onClick={() => setJustification((curr: number) => (curr + 1) % 4)}
    >
      {
        [
          <BiAlignJustify key="justify" />,
          <BiAlignLeft key="left" />,
          <BiAlignRight key="right" />,
          <BiAlignMiddle key="center" />,
        ][justification]
      }
    </IconButton>
    <IconButton
      title="Toggle outline view"
      aria-label="Toggle outline view"
      onClick={() => setOutline((curr: boolean) => !curr)}
    >
      {outline ? <IoIosListBox /> : <IoMdListBox />}
    </IconButton>
    <IconButton
      title="Toggle headers"
      aria-label="Toggle headers"
      onClick={() => setCollapse((curr: boolean) => !curr)}
    >
      {collapse ? <MdOutlineExpand /> : <MdOutlineCollapse />}
    </IconButton>
  </ToolbarContainer>
);
