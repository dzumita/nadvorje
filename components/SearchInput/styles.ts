import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import sizes from '../../constans/sizes';
import { ThemeType } from '../../theme/types';

const getStyles = (theme: ThemeType) => {
  const { colors } = theme;

  return StyleSheet.create({
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
};

const useStyles = () => {
  const theme = useTheme();

  return {
    style: getStyles(theme).textInput,
    underlineColorAndroid: 'transparent',
    placeholderTextColor: theme.colors.fontSecondary,
  };
};

export default useStyles;
