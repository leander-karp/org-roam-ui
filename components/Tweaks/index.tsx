import { styled } from '@linaria/react';

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
import VStack from '../VStack';
import { IconButton, SettingsIcon, CloseIcon, ResetIcon } from './IconButton';

const Heading = styled.h2`
  font-size: large;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Spacer = styled.div`
  width: 1rem;
  height: 1rem;
`;

const TweaksContainer = styled.div`
  position: absolute;
  background-color: var(--theme-color-alt-100);
  width: 20rem;
  margin-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 0.5rem;
  border-radius: 0.5rem;
  padding-bottom: 1rem;
  z-index: 10;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-height: 95vh;
  overflow: auto;
`;

const TweaksMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 0.25rem;
`;

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
    <TweaksContainer className={themes2[emacsTheme[0]]}>
      <TweaksMenu>
        <IconButton
          aria-label="Reset settings to defaults"
          title="Reset settings to defaults"
          onClick={() => {
            setVisuals(initialVisuals);
            setFilter(initialFilter);
            setColoring(initialColoring);
            setHighlightColor('purple.500'); // TODO: Make customizable
          }}
        >
          <ResetIcon />
        </IconButton>
        <IconButton
          aria-label="Close Tweak Panel"
          title="Close Tweak Panel"
          onClick={() => setShowTweaks(false)}
        >
          <CloseIcon />
        </IconButton>
      </TweaksMenu>
      <Heading>Filter</Heading>
      <FilterPanel
        filter={filter}
        setFilter={setFilter}
        tagColors={tagColors}
        setTagColors={setTagColors}
      />
      <Spacer />
      <Heading>Visual</Heading>
      <VStack>
        <ThemeSelect />
        <GraphColorSelect {...{ coloring, setColoring }} />
        <HighlightingPanel visuals={visuals} setVisuals={setVisuals} />
        <CitationsPanel visuals={visuals} setVisuals={setVisuals} />
      </VStack>
    </TweaksContainer>
  ) : (
    <IconButton
      isHidden={showTweaks}
      onClick={() => setShowTweaks(true)}
      aria-label={'Settings'}
      zIndex={16}
    >
      <SettingsIcon />
    </IconButton>
  );
};
