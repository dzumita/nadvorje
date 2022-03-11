import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import sizes from '../../constans/sizes';
import { ThemeColors, Theme } from '../../theme/types';

const getStyles = ({ colors }: { colors: ThemeColors }) =>
  StyleSheet.create({
    textInput: {
      backgroundColor: colors.bgSecondary,
      color: colors.fontPrimary,
      fontSize: sizes.feedbackItem.font,
      height: sizes.feedbackItem.height,
      width: 300,
      marginTop: 20,
      marginHorizontal: 20,
      paddingHorizontal: sizes.padding,
      alignSelf: 'center',
      borderRadius: sizes.borderRadius,
    },
  });

const useStyles = () => {
  const theme = useTheme() as unknown as Theme;

  return {
    style: getStyles(theme).textInput,
    underlineColorAndroid: 'transparent',
    placeholderTextColor: theme.colors.fontSecondary,
  };
};

export default useStyles;
