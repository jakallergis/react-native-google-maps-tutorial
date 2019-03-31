/**
 * Created by Giannis Kallergis on 2019-03-27
 * @flow
 */

import React                        from 'react';
import { StyleSheet, View, Button } from 'react-native';

/** Utilities */

type Props = {
  navigation: any
}

export default class Home extends React.Component<Props> {

  /** Button Handlers */

  _goToRegionChange = (): void => {
    this.props.navigation.navigate('RegionChange');
  };

  _goToAnimatedRegionChange = (): void => {
    this.props.navigation.navigate('AnimatedRegionChange');
  };

  _goToAnimatedAPIRegionChange = (): void => {
    this.props.navigation.navigate('AnimatedAPIRegionsChange');
  };

  _goToAnimatedMarkerChange = (): void => {
    this.props.navigation.navigate('AnimatedMarkerChange');
  };

  /** Renderers */

  render() {
    return (
      <View style={ styles.container }>
        <Button
          title={ 'Region Change' }
          onPress={ this._goToRegionChange } />
        <Button
          title={ 'Animated Region Change' }
          onPress={ this._goToAnimatedRegionChange } />
          <Button
          title={ 'Animated API Region Change' }
          onPress={ this._goToAnimatedAPIRegionChange } />
        <Button
          title={ 'Animated Marker Change' }
          onPress={ this._goToAnimatedMarkerChange } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});