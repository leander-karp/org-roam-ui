export const getThemeColor = (name: string, theme: any) => {
  const [colorName, colorCode] = name.split('.');

  if (colorCode === undefined) {
    return theme.colors[colorName];
  }

  return theme.colors[colorName][colorCode];
};
