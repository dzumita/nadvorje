import theme from '.';
import dark from './dark';

type Theme = typeof dark;
type ThemeNames = keyof typeof theme | undefined | null;
type ThemeColors = typeof dark.colors;

export { Theme, ThemeNames, ThemeColors };
