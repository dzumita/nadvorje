import { useState } from 'react';
import { useColorScheme } from 'react-native';

import theme from '../theme';
import { useThemeFunction } from './types';

const useTheme: useThemeFunction = () => {
  const [currentTheme, setCurrentTheme] = useState(useColorScheme());

  return [theme[currentTheme ?? 'light'], setCurrentTheme];
};

export default useTheme;
