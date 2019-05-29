/**
 * Created by Giannis Kallergis on 2019-05-24
 * @flow
 */

import React, { Component }                                 from 'react';
import { StyleSheet, View, Button }                         from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps';

/** Models / Types */
import type { Region, LatLng }                              from 'react-native-maps';

/** Utilities */
import { FACEBOOK, GOOGLE_PLEX, APPLE }                     from '../utilities/poi';
import getRegionFromMarkers                                 from '../utilities/getRegionFromMarkers';

type Props = {
  navigation: any
}
type State = {
  showMap: boolean,
  markers: LatLng[]
}
export default class RegionOutOfMarkersScreen extends Component<Props, State> {

  _currentRegion: AnimatedRegion;

  constructor(props: Props) {
    super(props);
    this._currentRegion = new MapView.AnimatedRegion(APPLE);
    this.state = {
      showMap: false,
      markers: [FACEBOOK, GOOGLE_PLEX, APPLE]
    };
  }

  componentDidMount(): void {
    setTimeout(() => this.setState({ showMap: true }), 300);
  }

  /** Button Handlers */

  _onMapPress = (e) => {
    const coordinate = e.nativeEvent.coordinate;
    this.setState({ markers: [...this.state.markers, coordinate] }, this._showPOIs);
  };

  _showPOIs = () => {
    const markers = this.state.markers;
    const region = getRegionFromMarkers(markers);
    this._currentRegion
      .timing({ ...region, duration: 1000 })
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
          onPress={ this._onMapPress }
          onRegionChangeComplete={ this._onRegionChangeComplete }
          style={ styles.mapViewContainer }>
          { this.state.markers.map(m => (
            <Marker
              key={ `${ m.latitude }.${ m.longitude }` }
              coordinate={ m } />
          )) }
        </MapView.Animated>
        <View style={ styles.buttonsContainer }>
          <Button
            title={ 'Show all POIs' }
            onPress={ this._showPOIs } />
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