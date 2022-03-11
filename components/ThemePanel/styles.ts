import { useStyles } from '@hooks';

const useThemePanelStyles = () =>
  useStyles((_, sizes) => ({
    container: {
      flexDirection: 'row',
    },
    gap: {
      width: sizes.gap,
    },
  }));

export default useThemePanelStyles;
