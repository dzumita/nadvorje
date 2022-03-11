import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { sizes } from '@constants';
import { UseStylesCallback } from './types';
import { ThemeColors } from '@theme/types';

const useStyles = (callback: UseStylesCallback) => {
  const { colors } = useTheme();

  return StyleSheet.create(callback(colors as unknown as ThemeColors, sizes));
};

export default useStyles;
