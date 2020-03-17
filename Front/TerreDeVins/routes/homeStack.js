import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import DisplayPost from '../screens/DisplayPost';

const screens = {
  Home: {
    screen: Home
  },
  DisplayPost: {
      screen: DisplayPost
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);