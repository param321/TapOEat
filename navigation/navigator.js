import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import { home } from '../Screens/Home/home';
import { login } from '../Screens/Auth/login';

export const Navigator=props=>(
    <AppContainer/>
);

const AppNavigator = createStackNavigator({
    Home: {
        screen: home
    },
    Login: {
        screen: login
    }
});

export const AppContainer = createAppContainer(AppNavigator);