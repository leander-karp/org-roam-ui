import { createContext } from 'react';

import { themeData } from '../components/themes2';

export type ThemeName = keyof typeof themeData;
export type ThemeContextProps = {
  emacsTheme: ThemeName;
  setEmacsTheme: (theme: ThemeName) => void;
  highlightColor: string;
  setHighlightColor: (color: string) => void;
};

export const initialTheme: ThemeName = 'one-vibrant';
export const initialHighlightColor = 'purple.500';

export const ThemeContext = createContext<ThemeContextProps>({
  emacsTheme: initialTheme,
  setEmacsTheme: () => {},
  highlightColor: initialHighlightColor,
  setHighlightColor: () => {},
});
