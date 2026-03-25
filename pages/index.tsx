import { useState } from 'react';
import {
  ThemeContext,
  Theme,
  initialTheme,
  initialHighlightColor,
} from '../util/themecontext';
import { GraphPage } from '../components/GraphPage';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { css } from '@linaria/core';
import { themes2 } from '../components/themes2';

export const globals = css`
  :global() {
    button,
    input[type='button'] {
      border: 0;
    }

    html {
      color-scheme: light dark;
    }

    body {
      font-family:
        -apple-system,
        BlinkMacSystemFont,
        Segoe UI,
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        Fira Sans,
        Droid Sans,
        Helvetica Neue,
        sans-serif;
      padding: 0;
      margin: 0;
      overflow: hidden;
    }

    img,
    svg,
    video {
      max-width: 100%;
      display: block;
    }

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }
  }
`;

function App() {
  const [emacsTheme, setEmacsTheme] = useState<Theme>(initialTheme);
  const [highlightColor, setHighlightColor] = useState(initialHighlightColor);

  return (
    <ThemeContext.Provider
      value={{
        emacsTheme: emacsTheme,
        setEmacsTheme: setEmacsTheme,
        highlightColor: highlightColor,
        setHighlightColor: setHighlightColor,
      }}
    >
      <div className={themes2[emacsTheme[0]]}>
        <GraphPage />
      </div>
    </ThemeContext.Provider>
  );
}

// @ts-expect-error This element is guaranteed.
const root = createRoot(document.getElementById('root'));
root.render(<App />);
