import React from 'react';
import { colorList, initialVisuals } from '../config';
import Switch from './Switch';
import Dropdown from './Dropdown';
import { styled } from '@linaria/react';
import { colorToCSSVarMap } from '../themes2';

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

type CircleProps = {
  colorKey: keyof typeof colorToCSSVarMap;
};

const Circle = styled.div<CircleProps>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => colorToCSSVarMap[props.colorKey]};
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
    id="highlight-switch"
    description="Highlighting"
  >
    <HighlightingPanelColorContainer highlightingActive={visuals.highlight}>
      <p>Color</p>
      <Spacer />
      <Dropdown>
        <Dropdown.Button>
          <Circle
            colorKey={visuals.highlightColor as keyof typeof colorToCSSVarMap}
          />
        </Dropdown.Button>
        <Dropdown.Content>
          <Dropdown.List>
            {colorList.map((color: string) => (
              <Dropdown.Item>
                <button
                  key={color}
                  onClick={() =>
                    setVisuals((visuals: typeof initialVisuals) => ({
                      ...visuals,
                      highlightColor: color,
                    }))
                  }
                >
                  <Circle colorKey={color as keyof typeof colorToCSSVarMap} />
                </button>
              </Dropdown.Item>
            ))}
          </Dropdown.List>
        </Dropdown.Content>
      </Dropdown>
    </HighlightingPanelColorContainer>
  </Switch>
);
