/**
 * Created by Giannis Kallergis on 2019-03-27
 * @flow
 */

import React, { Component }                 from 'react';
import { StyleSheet, View, Button }         from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

/** Utilities */
import { FACEBOOK, GOOGLE_PLEX, APPLE }     from '../utilities/poi';

type Props = {
  navigation: any
}
type State = { showMap: boolean }
export default class AnimatedRegionsChangeScreen extends Component<Props, State> {

  _mapView = React.createRef();

  constructor(props: Props) {
    super(props);
    this.state = { showMap: false };
  }

  componentDidMount(): void {
    setTimeout(() => this.setState({ showMap: true }), 300);
  }

  /** Button Handlers */

  _showApple = (): void => {
    if (this._mapView.current) {
      this._mapView.current.animateToRegion(APPLE, 2000);
    }
  };

  _showFacebook = (): void => {
    if (this._mapView.current) {
      this._mapView.current.animateToRegion(FACEBOOK, 2000);
    }
  };

  _showGoogle = (): void => {
    if (this._mapView.current) {
      this._mapView.current.animateToRegion(GOOGLE_PLEX, 2000);
    }
  };

  /** Renderers */

  render() {
    if (!this.state.showMap) {
      return null;
    }
    return (
      <View style={ styles.container }>
        <MapView
          ref={ this._mapView }
          provider={ PROVIDER_GOOGLE }
          initialRegion={ APPLE }
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
        </MapView>
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