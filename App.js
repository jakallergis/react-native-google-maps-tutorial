/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React                              from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

/** Components */
import AppNavigator                       from './src/navigation/AppNavigator';

type Props = {};
export default class App extends React.Component<Props> {
  render() {
    return (
      <View style={ styles.container }>
        <AppNavigator />
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});