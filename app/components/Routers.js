import React from 'react';

import {Router,Stack,Scene} from 'react-native-router-flux'

import Login from './Login';
import Register from './RegForm';

export default class Routers extends React.Component
{
    render()
    {
        <Router>
            <Stack key="root">
                <Scene key="login" component={Login} title="Login"/>
                <Scene key="register" component={Register} title="Register"/>
            </Stack>
        </Router>
    }
}