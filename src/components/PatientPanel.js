import React, { Component } from 'react';
//import { Icon } from 'react-native-icons';

import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class PatientPanel extends Component {

  render() {
    const { patient, onViewPatientDetailHandler } = this.props;
    return (
      <TouchableHighlight onPress={() => onViewPatientDetailHandler(patient)} underlayColor='transparent' style={styles.wrapper}>
        <View style={styles.container} onPress={() => this.onPressRow(patient)}>
            <View style={styles.thumnailContainerStyle}>
                <Image style={styles.thumnailStyle} source={patient.img} />
            </View>
                <View style={styles.textContainer}>
                    <Text style={styles.teamCity}>{patient.name}</Text>
                    <Text style={styles.teamName}>{patient.age}</Text>
                </View>
            </View>
    </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 90,
        flex: 1
    },
    container: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        justifyContent: 'flex-start'
    },
    thumnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    thumnailStyle: {
    width: 75,
    height: 75,
    borderRadius: 37
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  teamCity: {
    color: '#000',
    fontSize: 11,
    marginTop: 2
  },
  teamName: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 13,
    position: 'relative',
    top: 0
  },
});

