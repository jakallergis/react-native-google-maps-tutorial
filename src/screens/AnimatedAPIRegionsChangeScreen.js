/**
 * Created by Giannis Kallergis on 2019-03-27
 * @flow
 */

import React, { Component }                                 from 'react';
import { StyleSheet, View, Button }                         from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps';

/** Models / Types */
import type { Region }                                      from 'react-native-maps';

/** Utilities */
import { FACEBOOK, GOOGLE_PLEX, APPLE }                     from '../utilities/poi';

type Props = {
  navigation: any
}
type State = { showMap: boolean }
export default class AnimatedAPIRegionsChangeScreen extends Component<Props, State> {

  _currentRegion: AnimatedRegion;

  constructor(props: Props) {
    super(props);
    this.state = { showMap: false };
    this._currentRegion = new MapView.AnimatedRegion(APPLE);
  }

  componentDidMount(): void {
    setTimeout(() => this.setState({ showMap: true }), 300);
  }

  /** Button Handlers */

  _showApple = (): void => {
    this._currentRegion
      .timing({ ...APPLE, duration: 2000 })
      .start();
  };

  _showFacebook = (): void => {
    this._currentRegion
      .timing({ ...FACEBOOK, duration: 2000 })
      .start();
  };

  _showGoogle = (): void => {
    this._currentRegion
      .timing({ ...GOOGLE_PLEX, duration: 2000 })
      .start();
  };

  /** Generic Handlers */

  _onRegionChangeComplete = (region: Region): void => {
    this._currentRegion.setValue(region);
  };

  /** Renderers */

  render() {
    if (!this.state.showMap) {
      return null;
    }
    return (
      <View style={ styles.container }>
        <MapView.Animated
          provider={ PROVIDER_GOOGLE }
          region={ this._currentRegion }
          onRegionChangeComplete={ this._onRegionChangeComplete }
          style={ styles.mapViewContainer }>
          <Marker coordinate={ {
            latitude: APPLE.latitude,
            longitude: APPLE.longitude
          } } />
          <Marker coordinate={ {
            latitude: FACEBOOK.latitude,
            longitude: FACEBOOK.longitude
          } } />
          <Marker coordinate={ {
            latitude: GOOGLE_PLEX.latitude,
            longitude: GOOGLE_PLEX.longitude
          } } />
        </MapView.Animated>
        <View style={ styles.buttonsContainer }>
          <Button
            title={ 'Apple' }
            onPress={ this._showApple } />
          <Button
            title={ 'Facebook' }
            onPress={ this._showFacebook } />
          <Button
            title={ 'Google Plex' }
            onPress={ this._showGoogle } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  mapViewContainer: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16
  }
});