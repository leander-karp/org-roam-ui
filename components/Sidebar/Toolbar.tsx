import React from 'react';
import { Flex, IconButton, ButtonGroup } from '@chakra-ui/react';
import {
  BiAlignJustify,
  BiAlignLeft,
  BiAlignMiddle,
  BiAlignRight,
} from 'react-icons/bi';
import { MdOutlineExpand, MdOutlineCompress } from 'react-icons/md';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { IoIosListBox, IoMdListBox } from 'react-icons/io';

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

export const Toolbar = (props: ToolbarProps) => {
  const {
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
  } = props;
  return (
    <Flex
      flex="0 1 40px"
      pb={3}
      alignItems="center"
      justifyContent="space-between"
      pr={1}
    >
      <Flex>
        <ButtonGroup isAttached>
          <IconButton
            _focus={{}}
            variant="subtle"
            title="Go backward"
            icon={<ChevronLeftIcon />}
            aria-label="Previous node"
            disabled={!canUndo}
            onClick={() => previousPreviewNode()}
          />
          <IconButton
            _focus={{}}
            variant="subtle"
            title="Go forward"
            icon={<ChevronRightIcon />}
            aria-label="Next node"
            disabled={!canRedo}
            onClick={() => nextPreviewNode()}
          />
        </ButtonGroup>
      </Flex>
      <Flex>
        <IconButton
          variant="subtle"
          title="Justify  content"
          aria-label="Justify content"
          icon={
            [
              <BiAlignJustify key="justify" />,
              <BiAlignLeft key="left" />,
              <BiAlignRight key="right" />,
              <BiAlignMiddle key="center" />,
            ][justification]
          }
          onClick={() => setJustification((curr: number) => (curr + 1) % 4)}
        />
        <IconButton
          variant="subtle"
          title="Toggle outline view"
          aria-label="Toggle outline view"
          icon={outline ? <IoIosListBox /> : <IoMdListBox />}
          onClick={() => setOutline((curr: boolean) => !curr)}
        />
        <IconButton
          variant="subtle"
          title="Toggle headers"
          aria-label="Toggle headers"
          icon={collapse ? <MdOutlineExpand /> : <MdOutlineCompress />}
          onClick={() => setCollapse((curr: boolean) => !curr)}
        />
      </Flex>
    </Flex>
  );
};
