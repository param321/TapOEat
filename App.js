import React, { Component } from 'react';
import Home from './Screens/Home/home';
import Login from './Screens/Auth/login';
import {Navigator} from './navigation/navigator'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'


export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}