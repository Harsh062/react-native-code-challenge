/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import Header from './src/components/Header';
import PatientPanel from './src/components/PatientPanel';
import PatientProfile from './src/components/PatientProfile';
import patientsData from './src/utils/PatientData';


export default class App extends Component {
  state = {
    currentPatientProfile: patientsData[0],
    ifShowPatientProfile: false,
    headerValue: 'PATIENTS LIST'
  }
  
  onViewPatientDetailHandler = (patient) => {
    this.setState({
      currentPatientProfile: patient,
      ifShowPatientProfile: true,
      headerValue: 'PATIENT PROFILE'
    });
  }
  renderPatientList() {
    return patientsData.map((patient) => <PatientPanel patient={patient} key={patient.id} onViewPatientDetailHandler={this.onViewPatientDetailHandler} />);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header headerValue={this.state.headerValue}/>
        <ScrollView>
        {this.state.ifShowPatientProfile ? (<PatientProfile patientData={this.state.currentPatientProfile} />) : this.renderPatientList()}
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
