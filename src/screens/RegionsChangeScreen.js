/**
 * Created by Giannis Kallergis on 2019-03-27
 * @flow
 */

import React, { Component }                    from 'react';
import { StyleSheet, View, Button }            from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker }    from 'react-native-maps';

/** Models / Types */
import type { Region }                         from 'react-native-maps';

/** Utilities */
import { FACEBOOK, GOOGLE_PLEX, EIFFEL_TOWER } from '../utilities/poi';

type Props = {
  navigation: any
}
type State = {
  region: ?Region,
  showMap: boolean
}
export default class RegionsChangeScreen extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      region: null,
      showMap: false
    };
  }

  componentDidMount(): void {
    setTimeout(() => this.setState({ showMap: true }), 300);
  }

  /** Button Handlers */

  _showFacebook = (): void => this.setState({ region: FACEBOOK });
  _showGoogle = (): void => this.setState({ region: GOOGLE_PLEX });
  _showEiffelTower = (): void => this.setState({ region: EIFFEL_TOWER });

  /** Renderers */

  render() {
    if (!this.state.showMap) {
      return null;
    }
    return (
      <View style={ styles.container }>
        <MapView
          provider={ PROVIDER_GOOGLE }
          region={ this.state.region }
          style={ styles.mapViewContainer }>
          <Marker coordinate={ {
            latitude: FACEBOOK.latitude,
            longitude: FACEBOOK.longitude
          } } />
          <Marker coordinate={ {
            latitude: GOOGLE_PLEX.latitude,
            longitude: GOOGLE_PLEX.longitude
          } } />
          <Marker coordinate={ {
            latitude: EIFFEL_TOWER.latitude,
            longitude: EIFFEL_TOWER.longitude
          } } />
        </MapView>
        <View style={ styles.buttonsContainer }>
          <Button
            title={ 'Facebook' }
            onPress={ this._showFacebook } />
          <Button
            title={ 'Google Plex' }
            onPress={ this._showGoogle } />
          <Button
            title={ 'Eiffel Tower' }
            onPress={ this._showEiffelTower } />
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