import React from 'react';
import {View, Text, Switch} from 'react-native';

const FeverInLast5Days = ({
  feverInLast5Days,
  setFeverInLast5Days,
  disabled,
  containerStyle,
  textStyle,
  switchContainerStyle,
}) => (
  <View style={containerStyle}>
    <Text style={textStyle}>Fever in the last 5 days?</Text>
    <View style={switchContainerStyle}>
      <Text style={textStyle}>🤒</Text>
      <Switch
        value={feverInLast5Days}
        onValueChange={setFeverInLast5Days}
        disabled={disabled}
      />
    </View>
  </View>
);

export default FeverInLast5Days;
