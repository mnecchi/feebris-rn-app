import React from 'react';
import 'react-native';
import Button from '../Button';
import renderer from 'react-test-renderer';
import {homeStyle} from '../../styles';

describe('should render successfully', () => {
  it('enabled and not loading', () => {
    const tree = renderer
      .create(
        <Button
          title="Title"
          onPress={jest.fn()}
          buttonStyle={homeStyle.buttonContainer}
          textStyle={homeStyle.buttonText}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('disabled', () => {
    const tree = renderer
      .create(
        <Button
          title="Title"
          disabled={true}
          onPress={jest.fn()}
          buttonStyle={homeStyle.buttonContainer}
          textStyle={homeStyle.buttonText}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('loading', () => {
    const tree = renderer
      .create(
        <Button
          title="Title"
          loading={true}
          onPress={jest.fn()}
          buttonStyle={homeStyle.buttonContainer}
          textStyle={homeStyle.buttonText}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
