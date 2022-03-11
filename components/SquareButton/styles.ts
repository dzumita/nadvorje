import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import sizes from '../../constans/sizes';

const getStyles = ({ colors }: any) =>
  StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.bgSecondary,
      padding: sizes.padding,
      borderRadius: sizes.borderRadius,
      aspectRatio: 1,
      minHeight: sizes.feedbackItem.height,
    },
    text: {
      fontSize: sizes.feedbackItem.font,
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
