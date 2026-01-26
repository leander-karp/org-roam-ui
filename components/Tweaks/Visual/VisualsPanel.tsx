import { VStack } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { HighlightingPanel } from './HighlightingPanel';
import { initialColoring, initialVisuals } from '../../config';
import { ThemeSelect } from './ThemeSelect';
import { CitationsPanel } from '../CitationsPanel';
import { GraphColorSelect } from './GraphColorSelect';

export interface VisualsPanelProps {
  visuals: typeof initialVisuals;
  setVisuals: any;
  coloring: typeof initialColoring;
  setColoring: any;
}

export const VisualsPanel = ({
  coloring,
  setColoring,
  visuals,
  setVisuals,
}: VisualsPanelProps) => {
  const setVisualsCallback = useCallback((val: unknown) => setVisuals(val), []);

  return (
    <VStack justifyContent="flex-start" align="stretch">
      <ThemeSelect />
      <GraphColorSelect {...{ coloring, setColoring }} />
      <HighlightingPanel visuals={visuals} setVisuals={setVisualsCallback} />
      <CitationsPanel visuals={visuals} setVisuals={setVisualsCallback} />
    </VStack>
  );
};
