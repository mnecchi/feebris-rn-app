import React from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';
import Results from './src/screens/Results';

console.disableYellowBox = true;

const headerBackStyle = tintColor => ({
  color: tintColor,
  fontWeight: 'bold',
  paddingLeft: 8,
});

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Results: {
      screen: Results,
    },
  },
  {
    initialRouteName: 'Home',
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
