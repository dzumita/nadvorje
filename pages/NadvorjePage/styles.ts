import { Platform, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { ThemeColors } from '../../theme/types';

const getStyles = ({ colors }: { colors: ThemeColors }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.bgPrimary,
    },
    textStyle: {
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
      color: colors.fontPrimary,
    },
    largeText: {
      fontSize: 44,
    },
    smallText: {
      fontSize: 18,
    },
  });

const useStyles = () =>
  getStyles(useTheme() as unknown as { colors: ThemeColors });

export default useStyles;
