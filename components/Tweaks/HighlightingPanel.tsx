import React from 'react';
import { colorList, initialVisuals } from '../config';
import { Box } from '@chakra-ui/react';
import Switch from './Switch';
import Dropdown from './Dropdown';
import { styled } from '@linaria/react';

export interface HighlightingPanelProps {
  visuals: typeof initialVisuals;
  setVisuals: any;
}

type HighlightingPanelColorContainerProps = {
  highlightingActive: boolean;
};

const HighlightingPanelColorContainer = styled.div<HighlightingPanelColorContainerProps>`
  display: flex;
  align-items: center;
  visibility: ${(props) => (props.highlightingActive ? 'visible' : 'hidden')};
`;

const Spacer = styled.div`
  width: 0.5rem;
  height: 0.5rem;
`;

export const HighlightingPanel = ({
  visuals,
  setVisuals,
}: HighlightingPanelProps) => (
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
  >
    <HighlightingPanelColorContainer highlightingActive={visuals.highlight}>
      <p>Color</p>
      <Spacer />
      <Dropdown>
        <Dropdown.Button>
          <Box
            bgColor={
              visuals.highlightColor
            } /* FIXME: Color is based on chakra theme*/
            style={{
              borderRadius: '16px',
              height: '16px',
              width: '16px',
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
    </HighlightingPanelColorContainer>
  </Switch>
);
