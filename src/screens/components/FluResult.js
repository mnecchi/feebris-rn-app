import React from 'react';
import {View, Text} from 'react-native';

const FluResult = ({
  isFlu,
  containerStyle,
  textStyle,
  textFluStyle,
  textNoFluStyle,
}) => (
  <View style={containerStyle}>
    <Text style={[textStyle, isFlu ? textFluStyle : textNoFluStyle]}>
      {isFlu ? "Sorry, you've got the Flu!" : 'No Flu! Hooray!'}
    </Text>
    <Text style={textStyle}>{isFlu ? '💊' : '🎉'}</Text>
  </View>
);

export default FluResult;
