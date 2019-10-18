import React from 'react';
import TemperatureScreen from '../TemperatureScreen';
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

  const wrapper = shallow(<TemperatureScreen />);
  expect(wrapper).toMatchSnapshot();
});

it('should not navigate away if temp is empty when button is clicked', () => {
  useDispatch.mockImplementation(() => mockedDispatch);
  useSelector.mockImplementation(() => '');
  const mockedNavigation = {navigate: jest.fn()};

  const wrapper = shallow(<TemperatureScreen navigation={mockedNavigation} />);
  wrapper
    .find('Button')
    .props()
    .onPress();

  expect(mockedNavigation.navigate).toHaveBeenCalledTimes(0);
});

it('should not navigate away if temp is not a number when button is clicked', () => {
  useDispatch.mockImplementation(() => mockedDispatch);
  useSelector.mockImplementation(() => 'aaa');
  const mockedNavigation = {navigate: jest.fn()};

  const wrapper = shallow(<TemperatureScreen navigation={mockedNavigation} />);
  wrapper
    .find('Button')
    .props()
    .onPress();

  expect(mockedNavigation.navigate).toHaveBeenCalledTimes(0);
});

it('should not navigate away if temp is less than 35 when button is clicked', () => {
  useDispatch.mockImplementation(() => mockedDispatch);
  useSelector.mockImplementation(() => '34');
  const mockedNavigation = {navigate: jest.fn()};

  const wrapper = shallow(<TemperatureScreen navigation={mockedNavigation} />);
  wrapper
    .find('Button')
    .props()
    .onPress();

  expect(mockedNavigation.navigate).toHaveBeenCalledTimes(0);
});

it('should not navigate away if temp is more than 43 when button is clicked', () => {
  useDispatch.mockImplementation(() => mockedDispatch);
  useSelector.mockImplementation(() => '44');
  const mockedNavigation = {navigate: jest.fn()};

  const wrapper = shallow(<TemperatureScreen navigation={mockedNavigation} />);
  wrapper
    .find('Button')
    .props()
    .onPress();

  expect(mockedNavigation.navigate).toHaveBeenCalledTimes(0);
});

it('should navigate away to cough screen if temp is valid when button is clicked', () => {
  useDispatch.mockImplementation(() => mockedDispatch);
  useSelector.mockImplementation(() => '38');
  const mockedNavigation = {navigate: jest.fn()};

  const wrapper = shallow(<TemperatureScreen navigation={mockedNavigation} />);
  wrapper
    .find('Button')
    .props()
    .onPress();

  expect(mockedNavigation.navigate).toHaveBeenCalledTimes(1);
});

it('should set fever value on switch change', () => {
  useDispatch.mockImplementation(() => mockedDispatch);
  useSelector.mockImplementation(() => mockedUseSelector);

  const wrapper = shallow(<TemperatureScreen />);
  wrapper
    .find('Temperature')
    .props()
    .setTemperature('37.5');

  expect(mockedDispatch).toHaveBeenCalledWith({
    type: 'SET_READING',
    payload: {
      temperature: 37.5,
    },
  });
});
