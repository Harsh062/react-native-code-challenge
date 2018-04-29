import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Dashboard from './components/Header';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="dashboard" component={Dashboard} title="Dashboard" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
