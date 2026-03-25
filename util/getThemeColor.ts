import { themeData } from '../components/themes2';
import { ThemeName } from './themecontext';

export const getThemeColor = (name: string, themeName: ThemeName) => {
  if (!(themeName in themeData)) {
    throw new Error(`Unknown theme name "${themeName}"`);
  }

  const theme: { [key: string]: string } = themeData[themeName];
  const [colorName, colorCode] = name.split('.');
  const key = `--theme-color-${colorName}-${colorCode}`;
  const fallbackKey = `--theme-color-${colorName}`;

  if (key in theme) {
    return theme[key];
  }

  return theme[fallbackKey];
};
