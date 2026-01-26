import React from 'react';
import { colorList, initialVisuals } from '../config';
import { ColorMenu } from './ColorMenu';
import { Box, Collapse, Flex } from '@chakra-ui/react';
import Switch from './Switch';

export interface HighlightingPanelProps {
  visuals: typeof initialVisuals;
  setVisuals: any;
}

export const HighlightingPanel = ({
  visuals,
  setVisuals,
}: HighlightingPanelProps) => (
  <Flex
    key="Highlighting"
    flexDirection="column"
    pt={2}
    justifyContent="space-between"
    pl={7}
    pr={2}
  >
    <Switch
      checked={visuals.highlight}
      onChange={() =>
        setVisuals((visuals: typeof initialVisuals) => ({
          ...visuals,
          highlight: !visuals.highlight,
        }))
      }
      id={'highlight-switch'}
      description={'Highlighting'}
    />
    <Collapse in={visuals.highlight} animateOpacity>
      <Box paddingLeft={4} paddingTop={2} paddingBottom={2}>
        <ColorMenu
          colorList={colorList}
          label="highlighting color"
          setVisuals={setVisuals}
          value="highlightColor"
          visValue={visuals.highlightColor}
        />
      </Box>
    </Collapse>
  </Flex>
);
