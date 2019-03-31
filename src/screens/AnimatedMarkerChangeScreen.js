/**
 * Created by Giannis Kallergis on 2019-03-28
 * @flow
 */

import React, { Component }                                                            from 'react';
import { StyleSheet, View, Button }                                                    from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker }                    from 'react-native-maps';

/** Utilities */
import { APPLE_OUT, APPLE_COORDINATES, FACEBOOK_COORDINATES, GOOGLE_PLEX_COORDINATES } from '../utilities/poi';

type Props = {
  navigation: any
}
type State = { showMap: boolean }
export default class AnimatedMarkerChangeScreen extends Component<Props, State> {

  _mapView = React.createRef();
  _markerLatLng: MapView.AnimatedRegion;

  constructor(props: Props) {
    super(props);
    this.state = { showMap: false };
    this._markerLatLng = new MapView.AnimatedRegion(APPLE_OUT);
  }

  componentDidMount(): void {
    setTimeout(() => this.setState({ showMap: true }), 300);
  }

  /** Button Handlers */

  _showApple = (): void => {
    this._markerLatLng.timing(APPLE_COORDINATES).start();
  };

  _showFacebook = (): void => {
    this._markerLatLng.timing(FACEBOOK_COORDINATES).start();
  };

  _showGoogle = (): void => {
    this._markerLatLng.timing(GOOGLE_PLEX_COORDINATES).start();
  };

  /** Renderers */

  render() {
    if (!this.state.showMap) {
      return null;
    }
    return (
      <View style={ styles.container }>
        <MapView
          provider={ PROVIDER_GOOGLE }
          initialRegion={ APPLE_OUT }
          style={ styles.mapViewContainer }>
          <Marker.Animated coordinate={ this._markerLatLng } />
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