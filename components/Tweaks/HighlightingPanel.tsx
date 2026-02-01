import React from 'react';
import { colorList, initialVisuals } from '../config';
import { Box } from '@chakra-ui/react';
import Switch from './Switch';
import Dropdown from './Dropdown';

export interface HighlightingPanelProps {
  visuals: typeof initialVisuals;
  setVisuals: any;
}

export const HighlightingPanel = ({
  visuals,
  setVisuals,
}: HighlightingPanelProps) => (
  <div
    style={{
      paddingLeft: '1rem',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
    }}
    key={'Highlighting'}
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
    <div
      style={{
        paddingLeft: '1rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        visibility: visuals.highlight ? 'visible' : 'hidden',
      }}
    >
      <p>highlighting color</p>
      <Dropdown>
        <Dropdown.Button>
          <Box
            bgColor={
              visuals.highlightColor
            } /* FIXME: Color is based on chakra theme*/
            style={{
              borderRadius: '16px',
              height: '24px',
              width: '24px',
            }}
          />
        </Dropdown.Button>
        <Dropdown.Content>
          <Dropdown.List>
            {colorList.map((color: string) => (
              <button
                style={{
                  display: 'flex',
                  margin: '0.5rem',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                key={color}
                onClick={() =>
                  setVisuals((visuals: typeof initialVisuals) => ({
                    ...visuals,
                    highlightColor: color,
                  }))
                }
              >
                <Box
                  bgColor={color} /* FIXME: Color is based on chakra theme*/
                  style={{
                    borderRadius: '16px',
                    height: '24px',
                    width: '24px',
                  }}
                />
              </button>
            ))}
          </Dropdown.List>
        </Dropdown.Content>
      </Dropdown>
    </div>
  </div>
);
