import React from 'react';
import {
  StyleProp,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import useSquareButtonStyles from './styles';
import { SquareButtonProps } from './types';

const SquareButton = ({ title, onPress, disabled }: SquareButtonProps) => {
  const styles = useSquareButtonStyles();

  const buttonStyles: StyleProp<ViewStyle> = [styles.button];
  if (disabled) buttonStyles.push(styles.disable);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={buttonStyles}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SquareButton;
