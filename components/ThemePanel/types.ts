import { ThemeNames } from '../../theme/types';

type ThemePanelProps = {
  currentTheme: ThemeNames;
  changeTheme: (theme: ThemeNames) => void;
};

export { ThemePanelProps };
