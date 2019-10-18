import React from 'react';
import 'react-native';
import Temperature from '../Temperature';
import renderer from 'react-test-renderer';
import {homeStyle} from '../../styles';

it('should render successfully', () => {
  const tree = renderer
    .create(
      <Temperature
        temperature={36.5}
        setTemperature={jest.fn()}
        containerStyle={homeStyle.temperatureContainer}
        textStyle={homeStyle.temperatureText}
        inputStyle={homeStyle.temperatureInputError}
        inputContainerStyle={homeStyle.temperatureInputContainer}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
