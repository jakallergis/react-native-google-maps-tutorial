/**
 * Created by Giannis Kallergis on 2019-05-29
 * @flow
 */

import React                                       from 'react';
import { StyleSheet, View, Text }                  from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker }        from 'react-native-maps';

/** Utilities */
import { FACEBOOK, GOOGLE_PLEX, APPLE, APPLE_OUT } from '../utilities/poi';

type Props = { navigation: any }
type State = { showMap: boolean }
export default class CustomMarkersScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { showMap: false };
  }

  componentDidMount(): void {
    setTimeout(() => this.setState({ showMap: true }), 300);
  }

  /** Renderers */

  render() {
    if (!this.state.showMap) {
      return null;
    }
    return (
      <View style={ styles.container }>
        <MapView.Animated
          provider={ PROVIDER_GOOGLE }
          region={ APPLE_OUT }
          onPress={ this._onMapPress }
          style={ styles.mapViewContainer }>
          <Marker coordinate={ FACEBOOK } />
          <Marker coordinate={ GOOGLE_PLEX }>
            <Text style={ styles.markerText }>{ GOOGLE_PLEX.latitude },{ GOOGLE_PLEX.longitude }</Text>
          </Marker>
          <Marker coordinate={ APPLE }>
            <Text style={ styles.markerText }>😎</Text>
          </Marker>
        </MapView.Animated>
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
  markerText: {
    fontSize: 21,
    fontWeight: 'bold'
  }
});