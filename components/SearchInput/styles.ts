import { useStyles } from '../../hooks';
import { useTheme } from '@react-navigation/native';
import { Theme } from '../../theme/types';

const useTextInputStyles = () =>
  useStyles((colors, sizes) => ({
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
  }));

const useSearchInputStyles = () => {
  const theme = useTheme() as unknown as Theme;
  const textInputStyles = useTextInputStyles();

  return {
    style: textInputStyles.textInput,
    underlineColorAndroid: 'transparent',
    placeholderTextColor: theme.colors.fontSecondary,
  };
};

export default useSearchInputStyles;
