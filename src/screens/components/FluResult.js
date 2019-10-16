import React from 'react';
import {View, Text} from 'react-native';

const FluResult = ({isFlu, containerStyle}) => (
  <View style={containerStyle}>
    <Text>{isFlu ? 'You have the flu!' : 'No Flu! Hooray!'}</Text>
  </View>
);

export default FluResult;
