import React from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TemperatureScreen from './src/screens/TemperatureScreen';
import CoughScreen from './src/screens/CoughScreen';
import FeverInLast5DaysScreen from './src/screens/FeverInLast5DaysScreen';
import ResultsScreen from './src/screens/ResultsScreen';

console.disableYellowBox = true;

const headerBackStyle = tintColor => ({
  color: tintColor,
  fontWeight: 'bold',
  paddingLeft: 8,
});

const AppNavigator = createStackNavigator(
  {
    Temperature: {
      screen: TemperatureScreen,
    },
    Cough: {
      screen: CoughScreen,
    },
    FeverInLast5Days: {
      screen: FeverInLast5DaysScreen,
    },
    Results: {
      screen: ResultsScreen,
    },
  },
  {
    initialRouteName: 'Temperature',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'rgba(60, 142, 183, 1)',
      },
      headerTitleStyle: {
        color: 'white',
        fontWeight: 'bold',
      },
      headerTintColor: 'white',
      headerBackTitleStyle: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 4,
      },
      headerBackImage: ({tintColor}) => (
        <Text style={headerBackStyle(tintColor)}>{'<'}</Text>
      ),
    },
  },
);

export default createAppContainer(AppNavigator);
