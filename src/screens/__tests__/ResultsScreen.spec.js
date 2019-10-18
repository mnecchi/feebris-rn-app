import React from 'react';
import 'react-native';
import ResultsScreen from '../ResultsScreen';
import {useDispatch, useSelector} from 'react-redux';
import {shallow} from 'enzyme';

const mockedDispatch = jest.fn();
const mockedUseSelector = jest.fn();

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

it('should render successfully', async () => {
  useDispatch.mockImplementation(() => mockedDispatch);
  useSelector.mockImplementation(() => mockedUseSelector);

  const wrapper = shallow(<ResultsScreen />);
  expect(wrapper).toMatchSnapshot();
});

it('should navigate to the temperature screen when button is clicked', () => {
  useDispatch.mockImplementation(() => mockedDispatch);
  useSelector.mockImplementation(() => mockedUseSelector);
  const mockedNavigation = {navigate: jest.fn()};

  const wrapper = shallow(<ResultsScreen navigation={mockedNavigation} />);
  wrapper
    .find('Button')
    .props()
    .onPress();

  expect(mockedDispatch).toHaveBeenCalledWith({
    type: 'CLEAR_READING',
  });
  expect(mockedNavigation.navigate).toHaveBeenCalledWith('Temperature');
});
