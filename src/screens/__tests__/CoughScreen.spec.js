import React from 'react';
import 'react-native';
import CoughScreen from '../CoughScreen';
import {useDispatch, useSelector} from 'react-redux';
import {shallow} from 'enzyme';

const mockedDispatch = jest.fn();
const mockedUseSelector = jest.fn();

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

it('should render successfully', () => {
  useDispatch.mockImplementation(() => mockedDispatch);
  useSelector.mockImplementation(() => mockedUseSelector);

  const wrapper = shallow(<CoughScreen />);
  expect(wrapper).toMatchSnapshot();
});

it('should set cough value on switch change', () => {
  useDispatch.mockImplementation(() => mockedDispatch);
  useSelector.mockImplementation(() => mockedUseSelector);

  const wrapper = shallow(<CoughScreen />);
  wrapper
    .find('Cough')
    .props()
    .setCough(true);

  expect(mockedDispatch).toHaveBeenCalledWith({
    type: 'SET_READING',
    payload: {
      cough: true,
    },
  });
});

it('should navigate to the fever screen when button is clicked', () => {
  useDispatch.mockImplementation(() => mockedDispatch);
  useSelector.mockImplementation(() => mockedUseSelector);
  const mockedNavigation = {navigate: jest.fn()};

  const wrapper = shallow(<CoughScreen navigation={mockedNavigation} />);
  wrapper
    .find('Button')
    .props()
    .onPress();

  expect(mockedNavigation.navigate).toHaveBeenCalledWith('FeverInLast5Days');
});
