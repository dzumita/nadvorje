import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import sizes from '../../constans/sizes';

const getStyles = ({ colors }: any) =>
  StyleSheet.create({
    textInput: {
      backgroundColor: colors.bgSecondary,
      color: colors.fontPrimary,
      height: 40,
      width: 300,
      marginTop: 20,
      marginHorizontal: 20,
      paddingHorizontal: sizes.padding,
      alignSelf: 'center',
      borderRadius: sizes.borderRadius,
    },
  });

const useStyles = () => {
  const theme = useTheme();

  return {
    style: getStyles(theme).textInput,
    underlineColorAndroid: 'transparent',
    placeholderTextColor: theme.colors.fontSecondary,
  };
};

export default useStyles;
