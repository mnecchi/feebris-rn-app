import React from 'react';
import 'react-native';
import FluResult from '../FluResult';
import renderer from 'react-test-renderer';
import {resultsStyle} from '../../styles';

describe('should render successfully', () => {
  it('is flu', () => {
    const tree = renderer
      .create(
        <FluResult
          isFlu={true}
          containerStyle={resultsStyle.fluResultContainer}
          textStyle={resultsStyle.fluResultText}
          textFluStyle={resultsStyle.fluResultFlu}
          textNoFluStyle={resultsStyle.fluResultNoFlu}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('is not flu', () => {
    const tree = renderer
      .create(
        <FluResult
          isFlu={false}
          containerStyle={resultsStyle.fluResultContainer}
          textStyle={resultsStyle.fluResultText}
          textFluStyle={resultsStyle.fluResultFlu}
          textNoFluStyle={resultsStyle.fluResultNoFlu}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
