import React from 'react';
import { initialVisuals } from '../config';
import { styled } from '@linaria/react';
import Switch from './Switch';

const CitationsTitle = styled.h3`
  font-style: italic;
`;

export const CitationsPanel = ({
  visuals,
  setVisuals,
}: {
  visuals: typeof initialVisuals;
  setVisuals: any;
}) => (
  <>
    <CitationsTitle>Citations</CitationsTitle>
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
  </>
);
