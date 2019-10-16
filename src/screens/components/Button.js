import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

const Button = ({onPress, buttonStyle, textStyle, disabled}) => (
  <TouchableHighlight onPress={onPress} style={buttonStyle} disabled={disabled}>
    <Text style={textStyle}>Flu??</Text>
  </TouchableHighlight>
);

export default Button;
