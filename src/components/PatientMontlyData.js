import React from 'react';
import { BarChart, XAxis } from 'react-native-svg-charts';
import { View, Text, StyleSheet } from 'react-native';
import * as scale from 'd3-scale';

class PatientMonthlyData extends React.PureComponent {

    render() {
        const { data } = this.props;
        return (
            <View>
                <Text style={styles.header}>Average Monthly Glucose Levels</Text>
                <View style={{ height: 200, padding: 20 }}>
                <BarChart
                    style={{ flex: 1 }}
                    data={data}
                    gridMin={0}
                    svg={{ fill: '#F58426' }}
                />
                <XAxis
                    style={{ marginTop: 10 }}
                    data={data}
                    scale={scale.scaleBand}
                    formatLabel={(value, index) => index}
                    labelStyle={{ color: 'black' }}
                />
            </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    header: {
        alignSelf: 'center'
    }
});

export default PatientMonthlyData;
