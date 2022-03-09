import { Platform, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const getStyles = ({ colors }: any) =>
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

const useStyles = () => getStyles(useTheme());

export default useStyles;
