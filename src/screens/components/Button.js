import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

const Button = ({
  onPress,
  buttonStyle,
  textStyle,
  loading,
  disabled,
  title,
}) => (
  <TouchableHighlight
    onPress={onPress}
    style={buttonStyle}
    disabled={loading || disabled}>
    <Text style={textStyle}>{loading ? 'Checking...' : title}</Text>
  </TouchableHighlight>
);

export default Button;
