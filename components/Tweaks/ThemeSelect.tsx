import React, { useContext } from 'react';
import { ThemeContext, ThemeName } from '../../util/themecontext';
import { styled } from '@linaria/react';
import Dropdown from './Dropdown';
import { themeData } from '../themes2';

const ThemeSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeSelect = () => {
  const { emacsTheme, setEmacsTheme } = useContext(ThemeContext);
  return (
    <ThemeSelectContainer>
      <p>Theme</p>
      <Dropdown>
        <Dropdown.Button>{emacsTheme}</Dropdown.Button>
        <Dropdown.Content>
          <Dropdown.List>
            {Object.keys(themeData).map((theme: string) => (
              <Dropdown.Item>
                <button
                  key={theme}
                  onClick={() => setEmacsTheme(theme as ThemeName)}
                  title={theme}
                >
                  <p
                    style={{
                      maxWidth: '4rem',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {theme}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: 'column',
                      height: '1.5rem',
                      width: '4rem',
                    }}
                  >
                    {Object.values(themeData[theme as ThemeName]).map(
                      (color: string) => (
                        <div
                          key={color}
                          style={{
                            backgroundColor: color,
                            flex: '1 1 8px',
                          }}
                        ></div>
                      )
                    )}
                  </div>
                </button>
              </Dropdown.Item>
            ))}
          </Dropdown.List>
        </Dropdown.Content>
      </Dropdown>
    </ThemeSelectContainer>
  );
};
