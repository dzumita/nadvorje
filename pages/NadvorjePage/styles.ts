import { Platform } from 'react-native';

import { useStyles } from '@hooks';

const useNadvorjePageStyles = () =>
  useStyles((colors) => ({
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
  }));

export default useNadvorjePageStyles;
