import { Switch } from '@chakra-ui/react';
import React from 'react';
import { initialVisuals } from '../config';

export interface CitationsPanelProps {
  visuals: typeof initialVisuals;
  setVisuals: any;
}

const Flex = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    {children}
  </div>
);

export const CitationsPanel = ({
  visuals,
  setVisuals,
}: CitationsPanelProps) => (
  <div>
    <Flex>
      {/* Add dashes to citation links made with org-roam-bibtex */}
      <p>Dash cite links</p>
      <Switch
        isChecked={visuals.citeDashes}
        onChange={() =>
          setVisuals({ ...visuals, citeDashes: !visuals.citeDashes })
        }
      ></Switch>
    </Flex>
    <Flex>
      {/* Add dashes to citation links, whose target has a note, made with org-roam-bibtex*/}
      <p>Dash ref links</p>
      <Switch
        isChecked={visuals.refDashes}
        onChange={() =>
          setVisuals({ ...visuals, refDashes: !visuals.refDashes })
        }
      ></Switch>
    </Flex>
  </div>
);
