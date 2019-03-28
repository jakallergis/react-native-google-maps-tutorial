/**
 * Created by Giannis Kallergis on 2019-03-27
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

/** Screens */
import Home                                         from '../screens/Home';
import RegionsChangeScreen                          from '../screens/RegionsChangeScreen';
import AnimatedRegionsChangeScreen                  from '../screens/AnimatedRegionsChangeScreen';

const MainStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  RegionChange: {
    screen: RegionsChangeScreen,
    navigationOptions: {
      title: 'Regions Change'
    }
  },
  AnimatedRegionChange: {
    screen: AnimatedRegionsChangeScreen,
    navigationOptions: {
      title: 'Animated Regions Change'
    }
  }
});

const AppNavigator = createAppContainer(MainStackNavigator);
export default AppNavigator;