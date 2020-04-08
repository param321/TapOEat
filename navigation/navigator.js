import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import Home from '../Screens/Home/home';
import Login from '../Screens/Auth/login';
import SignUp from '../Screens/Auth/Signup';
import Loading from '../Screens/Loading';
import Main from '../Screens/Main';

export const Navigator = () => (
  <AppContainer />
);
const SwitchNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    Login: Login,
    SignUp: SignUp,
    Main: Main,
    Home: Home
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(SwitchNavigator);
// export default App

// const AppContainer = createAppContainer(AppNavigator);

// const AppNavigator = createStackNavigator({
// 	Loading: {
//     	screen: Loading
//     },
//     Login: {
//         screen: Login
//     },
//     Home: {
//         screen: Home
//     },
//     Main: {
//     	screen: Main
//     },
//     SignUp: {
//     	screen: SignUp
//     },
//  });