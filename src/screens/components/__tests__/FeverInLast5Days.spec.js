import React from 'react';
import 'react-native';
import FeverInLast5Days from '../FeverInLast5Days';
import renderer from 'react-test-renderer';
import {homeStyle} from '../../styles';

describe('should render successfully', () => {
  it('enabled', () => {
    const tree = renderer
      .create(
        <FeverInLast5Days
          feverInLast5Days={true}
          setFeverInLast5Days={jest.fn()}
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
        <FeverInLast5Days
          disabled={true}
          feverInLast5Days={true}
          setFeverInLast5Days={jest.fn()}
          containerStyle={homeStyle.coughContainer}
          textStyle={homeStyle.coughText}
          switchContainerStyle={homeStyle.coughSwitchContainer}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
