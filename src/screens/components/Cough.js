import React from 'react';
import {View, Text, Switch} from 'react-native';

const Cough = ({
  cough,
  disabled,
  setCough,
  containerStyle,
  textStyle,
  switchContainerStyle,
}) => (
  <View style={containerStyle}>
    <Text style={textStyle}>Cough?</Text>
    <View style={switchContainerStyle}>
      <Text style={textStyle}>🤧</Text>
      <Switch value={cough} onValueChange={setCough} disabled={disabled} />
    </View>
  </View>
);

export default Cough;
