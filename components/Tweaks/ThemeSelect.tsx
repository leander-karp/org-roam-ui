import React, { useContext } from 'react';
import { themes } from '../themes';
import { ThemeContext } from '../../util/themecontext';
import { styled } from '@linaria/react';
import Dropdown from './Dropdown';

const ThemeSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1.75rem;
  padding-right: 0.5rem;
  align-items: center;
`;

export const ThemeSelect = () => {
  const { emacsTheme, setEmacsTheme } = useContext(ThemeContext);
  return (
    <ThemeSelectContainer>
      <p>Theme</p>
      <Dropdown>
        <Dropdown.Button>{emacsTheme[0] as string}</Dropdown.Button>
        <Dropdown.Content>
          <Dropdown.List>
            {Object.keys(themes).map((theme: string) => (
              <Dropdown.Item>
                <button
                  key={theme}
                  onClick={() => setEmacsTheme([theme, themes[theme]])}
                  title={theme}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                  }}
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
                    {Object.values(themes[theme as string]).map(
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
