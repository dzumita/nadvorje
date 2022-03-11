import { useStyles } from '@hooks';

const useLocalPanelStyles = () =>
  useStyles((_, sizes) => ({
    container: {
      flexDirection: 'row',
    },
    gap: {
      width: sizes.gap,
    },
  }));

export default useLocalPanelStyles;
