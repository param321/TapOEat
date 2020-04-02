import React, { Component } from 'react';
import Home from './Screens/Home/home.js';
import Login from './Screens/Auth/login.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  },
});

const AppContainer = createAppContainer(AppNavigator);