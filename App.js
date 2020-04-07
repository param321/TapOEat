// import React, { Component } from 'react';
// import Home from './Screens/Home/home';
// import Login from './Screens/Auth/login';
// import {Navigator} from './navigation/navigator';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// export default class App extends React.Component {
//   render() {
//     return <Navigator />;
//   }
// }

import React, { Fragment } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Home from './Screens/Home/home';
import Login from './Screens/Auth/login';
import SignUp from './Screens/Auth/Signup';
import Loading from './Screens/Loading';
import Main from './Screens/Main';

const SwitchNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    SignUp: SignUp,
    Login: Login,
    Main: Main,
    Home: Home
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none'
  }
)

const App = createAppContainer(SwitchNavigator);
export default App