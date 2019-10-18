import React from 'react';
import 'react-native';
import Cough from '../Cough';
import renderer from 'react-test-renderer';
import {homeStyle} from '../../styles';

describe('should render successfully', () => {
  it('enabled', () => {
    const tree = renderer
      .create(
        <Cough
          cough={true}
          setCough={jest.fn()}
          containerStyle={homeStyle.coughContainer}
          textStyle={homeStyle.coughText}
          switchContainerStyle={homeStyle.coughSwitchContainer}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('disabled', () => {
    const tree = renderer
      .create(
        <Cough
          disabled={true}
          cough={true}
          setCough={jest.fn()}
          containerStyle={homeStyle.coughContainer}
          textStyle={homeStyle.coughText}
          switchContainerStyle={homeStyle.coughSwitchContainer}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
