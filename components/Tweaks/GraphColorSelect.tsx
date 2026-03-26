import React from 'react';
import { initialColoring } from '../config';
import Dropdown from './Dropdown';

export interface GraphColorSelectProps {
  coloring: typeof initialColoring;
  setColoring: any;
}

export const GraphColorSelect = ({
  coloring,
  setColoring,
}: GraphColorSelectProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <p>Graph coloring</p>
    <Dropdown>
      <Dropdown.Button>
        {coloring.method === 'degree' ? 'Links' : 'Communities'}
      </Dropdown.Button>
      <Dropdown.Content>
        <Dropdown.List>
          <Dropdown.Item>
            <button
              onClick={() =>
                setColoring((curr: typeof initialColoring) => ({
                  ...curr,
                  method: 'degree',
                }))
              }
            >
              Number of links
            </button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button
              onClick={() =>
                setColoring((curr: typeof initialColoring) => ({
                  ...curr,
                  method: 'community',
                }))
              }
            >
              Communities
            </button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown.Content>
    </Dropdown>
  </div>
);
