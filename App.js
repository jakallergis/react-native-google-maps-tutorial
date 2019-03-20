/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component }                       from 'react';
import { StyleSheet, View, Button, SafeAreaView } from 'react-native';
import MapView, { PROVIDER_GOOGLE }               from 'react-native-maps';

/** Models / Types */
import type { Region }                            from 'react-native-maps';

/** Setup */

const FACEBOOK = {
  latitude: 37.485178,
  longitude: -122.147135,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02
};

const GOOGLE_PLEX = {
  latitude: 37.422264,
  longitude: -122.084036,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02
};

const EIFFEL_TOWER = {
  latitude: 48.858570,
  longitude: 2.294493,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02
};

type Props = {};
type State = { region: ?Region, }
export default class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { region: null };
  }

  /** Button Handlers */

  _showFacebook = (): void => this.setState({ region: FACEBOOK });
  _showGoogle = (): void => this.setState({ region: GOOGLE_PLEX });
  _showEiffelTower = (): void => this.setState({ region: EIFFEL_TOWER });

  /** Renderers */

  render() {
    return (
      <View style={ styles.container }>
        <MapView
          provider={ PROVIDER_GOOGLE }
          region={ this.state.region }
          style={ styles.mapViewContainer } />
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
        <SafeAreaView />
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