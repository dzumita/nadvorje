import dark from './dark';
import light from './light';

const theme = { dark, light };

type ThemeType = keyof typeof theme | undefined | null;

export default theme;
export { ThemeType };
