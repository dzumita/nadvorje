import { Platform } from 'react-native';
import { useStyles } from '../../hooks';

const useSettingsPageStyles = () =>
  useStyles((colors) => ({
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
  }));

export default useSettingsPageStyles;
