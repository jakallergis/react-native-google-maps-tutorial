/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component }         from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <MapView provider={ PROVIDER_GOOGLE } style={ { flex: 1 } } />
  }
}