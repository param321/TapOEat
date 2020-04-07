import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Screens/Home/home';
import Login from '../Screens/Auth/login';
import SignUp from '../Screens/Auth/Signup';
import Loading from '../Screens/Loading';
import Main from '../Screens/Main';

export const Navigator=()=>(
    <AppContainer/>
);

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    },
    Main: {
    	screen: Main
    },
    SignUp: {
    	screen: SignUp
    },
    Loading: {
    	screen: Loading
    }
});

const AppContainer = createAppContainer(AppNavigator);