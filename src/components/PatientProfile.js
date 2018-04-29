import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import ActionButton from 'react-native-action-button';
import Camera from 'react-native-camera';

import Icon from 'react-native-vector-icons/Ionicons';
import PatientMonthlyData from './PatientMontlyData';
import PatientWeeklyData from './PatientWeeklyData';

class PatientProfile extends React.PureComponent {
    state = {
        ifShowCamera: false
    }

    clickLogbookPic() {
       this.setState({
           ifShowCamera: true
       });
    }

    takePicture() {
        this.camera.capture()
          .then((data) => console.log(data))
          .catch(err => console.error(err));
      }

    render() {
        const { patientData } = this.props;
        const cameraContent = this.state.ifShowCamera ? (
            <Camera
            ref={(cam) => {
            this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            >
            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
        ) : null;

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image style={styles.patientImage} source={patientData.img} />
                    <Text style={styles.patientName}>{patientData.name}</Text>
                    <Text style={styles.patientAge}>{patientData.age}</Text>
                </View>
                <PatientWeeklyData data={patientData.weeklyData} />
                <PatientMonthlyData data={patientData.monthlyData} />
                {cameraContent}
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="Click Logbook Pic" onPress={() => this.clickLogbookPic()}>
                        <Icon name="md-camera" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    patientName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    patientAge: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    patientImage: {
        width: 75,
        height: 75,
        borderRadius: 37,
        marginTop: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
   capture: {
     flex: 0,
     backgroundColor: '#fff',
     borderRadius: 5,
     color: '#000',
     padding: 10,
     margin: 40
   }
});

export default PatientProfile;
