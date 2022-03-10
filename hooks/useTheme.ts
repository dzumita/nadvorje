import { useState } from 'react';
import { useColorScheme } from 'react-native';

import theme from '../theme';
import { useThemeType } from './types';

const useTheme = (): useThemeType => {
  const [currentTheme, setCurrentTheme] = useState(useColorScheme());

  return [theme[currentTheme], setCurrentTheme];
};

export default useTheme;
