import React from 'react';
import { BarChart, Grid } from 'react-native-svg-charts';
import { View, Text, StyleSheet } from 'react-native';

class PatientWeeklyData extends React.PureComponent {

    render() {
        const { data } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Average Weekly Glucose Levels</Text>
                <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
                    <BarChart
                        style={{ flex: 1, marginLeft: 8 }}
                        data={data}
                        horizontal={true}
                        svg={{ fill: '#FDB927' }}
                        contentInset={{ top: 10, bottom: 10 }}
                        spacing={0.4}
                        gridMin={0}
                    >
                    <Grid direction={Grid.Direction.VERTICAL} />
                </BarChart>
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

export default PatientWeeklyData;
