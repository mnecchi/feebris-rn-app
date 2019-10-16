import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Temperature = ({temperature, disabled, setTemperature, inputStyle}) => (
  <View>
    <Text>🌡 Temperature</Text>
    <TextInput
      value={temperature}
      disabled={disabled}
      onChangeText={setTemperature}
      keyboardType="decimal-pad"
      style={inputStyle}
    />
  </View>
);

export default Temperature;
