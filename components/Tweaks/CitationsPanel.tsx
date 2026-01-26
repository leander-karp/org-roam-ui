import React from 'react';
import { initialVisuals } from '../config';
import { styled } from '@linaria/react';

export interface CitationsPanelProps {
  visuals: typeof initialVisuals;
  setVisuals: any;
}

const SwitchContainer = styled.label`
  display: inline-block;
  height: 20px;
  position: relative;
  width: 34px;

  & input {
    visibility: hidden;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 2px;
    content: '';
    height: 16px;
    left: 2px;
    position: absolute;
    transition: 0.4s;
    width: 16px;
  }

  input:checked + .slider {
    background-color: #66bb6a;
  }

  input:checked + .slider:before {
    transform: translateX(14px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const Switch2 = ({
  id,
  description,
  checked,
  onChange,
}: {
  id: string;
  description: string;
  checked: boolean;
  onChange: any;
}) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <label htmlFor={id}>{description}</label>
    <SwitchContainer htmlFor={id}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <span className="slider round"></span>
    </SwitchContainer>
  </div>
);

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
    <Switch2
      id={'dash-cite-links'}
      checked={visuals.citeDashes}
      description={'Dash cite links'}
      onChange={() =>
        setVisuals({ ...visuals, citeDashes: !visuals.citeDashes })
      }
    />
    {/* Add dashes to citation links, whose target has a note, made with org-roam-bibtex*/}
    <Switch2
      id={'dash-ref-links'}
      checked={visuals.refDashes}
      description={'Dash ref links'}
      onChange={() => setVisuals({ ...visuals, refDashes: !visuals.refDashes })}
    />
  </CitationsPanelContainer>
);
