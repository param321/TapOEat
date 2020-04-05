import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Screens/Home/home';
import Login from '../Screens/Auth/login';

export const Navigator=()=>(
    <AppContainer/>
);

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    }
});

const AppContainer = createAppContainer(AppNavigator);