import { createContext } from 'react';

import { themes } from '../components/themes';
import { themeData } from '../components/themes2';

type ThemeName = keyof typeof themeData;
export type ThemeMap = { [color: string]: string };
export type Theme = [ThemeName, ThemeMap];
export type ThemeContextProps = {
  emacsTheme: Theme;
  setEmacsTheme: (theme: Theme) => void;
  highlightColor: string;
  setHighlightColor: (color: string) => void;
};

export const initialTheme: Theme = ['one-vibrant', themes['one-vibrant']];
export const initialHighlightColor = 'purple.500';

export const ThemeContext = createContext<ThemeContextProps>({
  emacsTheme: initialTheme,
  setEmacsTheme: () => {},
  highlightColor: initialHighlightColor,
  setHighlightColor: () => {},
});
