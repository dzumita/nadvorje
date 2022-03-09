import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import useStyles from './styles';

const Button = ({ title, onPress, disabled }: any) => {
  const styles = useStyles();

  const buttonStyles = [styles.button];
  if (disabled) buttonStyles.push(styles.disable);

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={buttonStyles}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;
