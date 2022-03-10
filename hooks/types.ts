import { ThemeType, ThemeNameType } from '../theme/types';

type useThemeType = () => [ThemeType, (ThemeName: ThemeNameType) => void];

export { useThemeType };
