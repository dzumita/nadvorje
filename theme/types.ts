import theme from '.';
import dark from './dark';

type ThemeType = typeof theme;
type ThemeNameType = keyof typeof theme | undefined | null;
type ThemeColorsType = typeof dark.colors;

export { ThemeType, ThemeNameType, ThemeColorsType };
