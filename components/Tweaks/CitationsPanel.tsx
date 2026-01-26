import React from 'react';
import { initialVisuals } from '../config';
import { styled } from '@linaria/react';
import Switch from './Switch';

export interface CitationsPanelProps {
  visuals: typeof initialVisuals;
  setVisuals: any;
}

const CitationsPanelContainer = styled.div`
  padding: 8px 24px 0 28px;
`;

export const CitationsPanel = ({
  visuals,
  setVisuals,
}: CitationsPanelProps) => (
  <CitationsPanelContainer>
    <p>Citations</p>
    {/* Add dashes to citation links made with org-roam-bibtex */}
    <Switch
      id={'dash-cite-links'}
      checked={visuals.citeDashes}
      description={'Dash cite links'}
      onChange={() =>
        setVisuals({ ...visuals, citeDashes: !visuals.citeDashes })
      }
    />
    {/* Add dashes to citation links, whose target has a note, made with org-roam-bibtex*/}
    <Switch
      id={'dash-ref-links'}
      checked={visuals.refDashes}
      description={'Dash ref links'}
      onChange={() => setVisuals({ ...visuals, refDashes: !visuals.refDashes })}
    />
  </CitationsPanelContainer>
);
