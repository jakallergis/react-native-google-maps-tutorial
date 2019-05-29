/**
 * Created by Giannis Kallergis on 2019-03-27
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

/** Screens */
import Home                                         from '../screens/Home';
import RegionsChangeScreen                          from '../screens/RegionsChangeScreen';
import AnimatedRegionsChangeScreen                  from '../screens/AnimatedRegionsChangeScreen';
import AnimatedAPIRegionsChangeScreen               from '../screens/AnimatedAPIRegionsChangeScreen';
import AnimatedMarkerChangeScreen                   from '../screens/AnimatedMarkerChangeScreen';
import RegionOutOfMarkersScreen                     from '../screens/RegionOutOfMarkersScreen';

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
  },
  AnimatedAPIRegionsChange: {
    screen: AnimatedAPIRegionsChangeScreen,
    navigationOptions: {
      title: 'Animated API Regions Change'
    }
  },
  AnimatedMarkerChange: {
    screen: AnimatedMarkerChangeScreen,
    navigationOptions: {
      title: 'Animated Marker Change'
    }
  },
  RegionOutOfMarkers: {
    screen: RegionOutOfMarkersScreen,
    navigationOptions: {
      title: 'Region out of Markers'
    }
  }
});

const AppNavigator = createAppContainer(MainStackNavigator);
export default AppNavigator;