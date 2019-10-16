import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  initialRoute: 'Home',
});

export default createAppContainer(AppNavigator);
