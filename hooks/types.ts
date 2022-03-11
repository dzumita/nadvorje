import { Theme, ThemeNames } from '../theme/types';
import { LocaleNames } from '../translations/types';

type useThemeFunction = () => [Theme, (ThemeName: ThemeNames) => void];
type useLocaleFunction = () => [
  LocaleNames, (LocaleName: LocaleNames) => void
];

export { useThemeFunction, useLocaleFunction };
