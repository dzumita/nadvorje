import { SizesConstant } from '../constans/types';
import { Theme, ThemeNames, ThemeColors } from '../theme/types';
import { LocaleNames } from '../translations/types';

type UseThemeFunction = () => [Theme, (ThemeName: ThemeNames) => void];
type UseLocaleFunction = () => [LocaleNames, (LocaleName: LocaleNames) => void];
type UseStylesCallback = (colors: ThemeColors, sizes: SizesConstant) => any;

export { UseThemeFunction, UseLocaleFunction, UseStylesCallback };
