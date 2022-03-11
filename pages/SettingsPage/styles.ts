import { Platform, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { ThemeColors } from '../../theme/types';

const getStyles = ({ colors }: { colors: ThemeColors }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: colors.bgPrimary,
      paddingTop: 30,
      paddingLeft: 30,
    },
    titleOption: {
      fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
      color: colors.fontPrimary,
      fontSize: 20,
      marginBottom: 10,
    },
    gap: {
      height: 30,
    },
  });

const useStyles = () =>
  getStyles(useTheme() as unknown as { colors: ThemeColors });

export default useStyles;
