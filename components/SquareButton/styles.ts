import useStyles from '../../hooks/useStyles';

const useSquareButtonStyles = () =>
  useStyles((colors, sizes) => ({
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
  }));

export default useSquareButtonStyles;
