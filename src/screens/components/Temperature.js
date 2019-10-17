import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Temperature = ({
  temperature,
  disabled,
  setTemperature,
  containerStyle,
  textStyle,
  inputStyle,
  inputContainerStyle,
}) => (
  <View style={containerStyle}>
    <Text style={textStyle}>Temperature</Text>
    <View style={inputContainerStyle}>
      <Text style={textStyle}>🌡</Text>
      <TextInput
        value={temperature}
        disabled={disabled}
        onChangeText={setTemperature}
        keyboardType="decimal-pad"
        style={inputStyle}
      />
    </View>
  </View>
);

export default Temperature;
