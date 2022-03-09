import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import sizes from '../../constans/sizes';

const getStyles = ({ colors }: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: sizes.padding,
    },
    button: {
      alignItems: 'center',
      backgroundColor: colors.bgSecondary,
      padding: sizes.padding,
      borderRadius: sizes.borderRadius,
    },
    text: {
      color: colors.fontPrimary,
      textTransform: 'uppercase',
    },
    disable: {
      borderWidth: 2,
      borderColor: colors.bgSecondary,
      backgroundColor: colors.bgPrimary,
    },
  });

const useStyles = () => getStyles(useTheme());

export default useStyles;
