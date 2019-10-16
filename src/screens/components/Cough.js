import React from 'react';
import {View, Text, Switch} from 'react-native';

const Cough = ({cough, disabled, setCough, containerStyle}) => (
  <View style={containerStyle}>
    <Text>🤧Cough?</Text>
    <Switch value={cough} onValueChange={setCough} disabled={disabled} />
  </View>
);

export default Cough;
