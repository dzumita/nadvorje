import { Platform, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const getStyles = ({ colors }: any) =>
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

const useStyles = () => getStyles(useTheme());

export default useStyles;
