import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import Home from '../Screens/Home/home';
import Login from '../Screens/Auth/login';
import SignUp from '../Screens/Auth/Signup';
import Loading from '../Screens/Loading';
import Main from '../Screens/Main';
import locationScreen from '../Screens/location';
import searchScreen from '../Screens/search';
// import { AppNavigator } from './navigator';

export const Navigator = () => (
  <AppContainer />
);
const ApplicationNavigator = createSwitchNavigator(
{
  Loading: {screen: Loading,},
  SignUp: {screen: SignUp,},
  Login: {screen: Login,},
  Account: AppNavigator,
},
{
  initialRouteName: 'Loading'
}
);
const AppContainer = createAppContainer(ApplicationNavigator);
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

// const SwitchNavigator = createSwitchNavigator(
//   {
//     Loading: LoadingSwitch,
//     Login: Login,
//     SignUp: SignUp,
//     Main: Main,
//     Home: Home
//   },
//   {
//     initialRouteName: 'Loading',
//     headerMode: 'none'
//   }
// )