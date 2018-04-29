/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//import { Icon } from 'react-native-icons';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Dashboard extends Component {
  render() {
    const { headerValue } = this.props;
    return (
      <View style={styles.header}>
        <Text style={styles.dashboardHeader}>{headerValue}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Header
  header: {
    backgroundColor: '#4D98E4',
    height: 100,
    flexDirection: 'column',
    position: 'relative',
    paddingLeft: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dashboardHeader: {
    color: '#fff',
    fontWeight: '300',
    fontSize: 25
  }
});
