import React from 'react';
import {Alert} from 'react-native';
import FeverInLast5DaysScreen from '../FeverInLast5DaysScreen';
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

  const wrapper = shallow(<FeverInLast5DaysScreen />);
  expect(wrapper).toMatchSnapshot();
});

it('should set fever value on switch change', () => {
  useDispatch.mockImplementation(() => mockedDispatch);
  useSelector.mockImplementation(() => mockedUseSelector);

  const wrapper = shallow(<FeverInLast5DaysScreen />);
  wrapper
    .find('FeverInLast5Days')
    .props()
    .setFeverInLast5Days(true);

  expect(mockedDispatch).toHaveBeenCalledWith({
    type: 'SET_READING',
    payload: {
      feverInLast5Days: true,
    },
  });
});

it('should navigate to the fever screen when button is clicked', async () => {
  useDispatch.mockImplementation(() => mockedDispatch);
  useSelector.mockImplementation(() => mockedUseSelector);
  const mockedNavigation = {navigate: jest.fn()};

  const wrapper = shallow(
    <FeverInLast5DaysScreen navigation={mockedNavigation} />,
  );
  await wrapper
    .find('Button')
    .props()
    .onPress();

  expect(mockedDispatch).toHaveBeenCalledTimes(1);
  expect(mockedNavigation.navigate).toHaveBeenCalledWith('Results');
});

it('should display an alert if the API fails', async () => {
  useDispatch.mockImplementation(() => () =>
    Promise.reject(new Error('Unknown Error')),
  );
  const wrapper = shallow(
    <FeverInLast5DaysScreen navigation={{navigate: jest.fn()}} />,
  );

  Alert.alert = jest.fn();
  await wrapper
    .find('Button')
    .props()
    .onPress();

  expect(Alert.alert).toHaveBeenCalledTimes(1);
});
