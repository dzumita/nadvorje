import { ThemeType } from '../../theme';

type ThemePanelType = {
  currentTheme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
};

export { ThemePanelType };
