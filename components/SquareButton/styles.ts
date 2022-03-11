import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import sizes from '../../constans/sizes';

import { ThemeColors, Theme } from '../../theme/types';

const getStyles = ({ colors }: { colors: ThemeColors }) =>
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

const useStyles = () => getStyles(useTheme() as unknown as Theme);

export default useStyles;
