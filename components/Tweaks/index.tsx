import { CloseIcon, RepeatClockIcon, SettingsIcon } from '@chakra-ui/icons';
import { Box, IconButton, Heading, VStack } from '@chakra-ui/react';

import React, { useContext, useState } from 'react';
import {
  initialFilter,
  initialVisuals,
  TagColors,
  initialColoring,
} from '../config';

import FilterPanel from './FilterPanel';

import { ThemeContext } from '../../util/themecontext';
import { ThemeSelect } from './ThemeSelect';
import { GraphColorSelect } from './GraphColorSelect';
import { HighlightingPanel } from './HighlightingPanel';
import { CitationsPanel } from './CitationsPanel';
import { themes2 } from '../themes2';

export interface TweakProps {
  filter: typeof initialFilter;
  setFilter: any;
  visuals: typeof initialVisuals;
  setVisuals: any;
  tagColors: TagColors;
  setTagColors: any;
  coloring: typeof initialColoring;
  setColoring: any;
}

export const Tweaks = ({
  filter,
  setFilter,
  visuals,
  setVisuals,
  tagColors,
  setTagColors,
  coloring,
  setColoring,
}: TweakProps) => {
  const [showTweaks, setShowTweaks] = useState(false);
  const { emacsTheme, setHighlightColor } = useContext(ThemeContext);

  return showTweaks ? (
    <Box
      position="absolute"
      bg="alt.100"
      w="xs"
      marginTop={2}
      paddingLeft={4}
      paddingRight={4}
      marginLeft={2}
      borderRadius="lg"
      paddingBottom={4}
      zIndex={10}
      boxShadow="xl"
      maxH={'95vh'}
      fontSize="sm"
      style={{ overflow: 'auto' }}
      className={themes2[emacsTheme[0]]}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        paddingTop={1}
      >
        <IconButton
          aria-label="Reset settings to defaults"
          icon={<RepeatClockIcon />}
          title="Reset settings to defaults"
          onClick={() => {
            setVisuals(initialVisuals);
            setFilter(initialFilter);
            setColoring(initialColoring);
            setHighlightColor('purple.500'); // TODO: Make customizable
          }}
          variant="subtle"
          size="sm"
        />
        <IconButton
          size="sm"
          icon={<CloseIcon />}
          aria-label="Close Tweak Panel"
          title="Close Tweak Panel"
          variant="subtle"
          onClick={() => setShowTweaks(false)}
        />
      </Box>
      <Heading size="sm">Filter</Heading>
      <FilterPanel
        filter={filter}
        setFilter={setFilter}
        tagColors={tagColors}
        setTagColors={setTagColors}
      />
      <Heading size="sm">Visual</Heading>
      <VStack justifyContent="flex-start" align="stretch">
        <ThemeSelect />
        <GraphColorSelect {...{ coloring, setColoring }} />
        <HighlightingPanel visuals={visuals} setVisuals={setVisuals} />
        <CitationsPanel visuals={visuals} setVisuals={setVisuals} />
      </VStack>
    </Box>
  ) : (
    <Box
      position="absolute"
      zIndex="overlay"
      marginTop={1}
      marginLeft={0}
      display={showTweaks ? 'none' : 'block'}
    >
      <IconButton
        variant="subtle"
        aria-label="Settings"
        icon={<SettingsIcon />}
        onClick={() => setShowTweaks(true)}
      />
    </Box>
  );
};
