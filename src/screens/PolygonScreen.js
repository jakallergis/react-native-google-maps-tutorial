/**
 * Created by Giannis Kallergis on 2019-05-24
 * @flow
 */

import React, { Component }                                          from 'react';
import { StyleSheet, View, Button }                                  from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polygon, AnimatedRegion, Marker } from 'react-native-maps';

/** Models / Types */
import type { Region }                                               from 'react-native-maps';

/** Utilities */
import { FACEBOOK, GOOGLE_PLEX, APPLE }                              from '../utilities/poi';
import getRegionFromMarkers                                          from '../utilities/getRegionFromMarkers';
import grahamScan                                                    from '../utilities/grahamScan';

class Point {
  constructor(c, identifier) {
    this.latitude = c.latitude;
    this.longitude = c.longitude;
    this.identifier = identifier;
  }

  get x(): number {
    return this.latitude;
  }

  set x(value: number) {
    this.latitude = value;
  }

  get y(): number {
    return this.longitude;
  }

  set y(value: number) {
    this.longitude = value;
  }
}

const FB = new Point(FACEBOOK, 'facebook');
const GP = new Point(GOOGLE_PLEX, 'google-plex');
const AP = new Point(APPLE, 'apple');

type Props = {
  navigation: any
}
type State = {
  showMap: boolean,
  points: Point[]
}
export default class PolygonScreen extends Component<Props, State> {
  _currentRegion: AnimatedRegion;

  constructor(props: Props) {
    super(props);
    this._currentRegion = new MapView.AnimatedRegion(APPLE);
    this.state = {
      showMap: false,
      points: [FB, GP, AP]
    };
  }

  componentDidMount(): void {
    setTimeout(() => this.setState({ showMap: true }), 300);
  }

  /** Button Handlers */

  _onMapPress = (e): void => {
    const coordinates = e.nativeEvent.coordinate;
    const newPoint = new Point(coordinates, `${ Date.now() }.${ Math.random() }`);
    const points = grahamScan.convexHull([...this.state.points, newPoint]);
    this.setState({ points }, this._showAll);
  };

  _showAll = (): void => {
    const points = this.state.points;
    const region = getRegionFromMarkers(points);
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
          <Polygon coordinates={ this.state.points } />
          { this.state.points.map((m, i) => (
            <Marker
              key={ `${ m.identifier }.${ i }` }
              coordinate={ m } />
          )) }
        </MapView.Animated>
        <View style={ styles.buttonsContainer }>
          <Button
            title={ 'Show All Points' }
            onPress={ this._showAll } />
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
