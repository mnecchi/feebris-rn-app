import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

const Button = ({onPress, buttonStyle, textStyle, loading, disabled}) => (
  <TouchableHighlight
    onPress={onPress}
    style={buttonStyle}
    disabled={loading || disabled}>
    <Text style={textStyle}>{loading ? 'Checking...' : 'Flu?'}</Text>
  </TouchableHighlight>
);

export default Button;
