import React from 'react';
import {View, Text, Switch} from 'react-native';

const FeverInLast5Days = ({
  feverInLast5Days,
  setFeverInLast5Days,
  disabled,
  containerStyle,
}) => (
  <View style={containerStyle}>
    <Text>🤒Fever for more than 5 days?</Text>
    <Switch
      value={feverInLast5Days}
      onValueChange={setFeverInLast5Days}
      disabled={disabled}
    />
  </View>
);

export default FeverInLast5Days;
