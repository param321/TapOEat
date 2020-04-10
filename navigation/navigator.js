import * as React from 'react';
import { Button, View } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home/home';
import Login from '../Screens/Auth/login';
import SignUp from '../Screens/Auth/Signup';
import Loading from '../Screens/Loading';
import Main from '../Screens/Main';

export const Navigator = () => (
  <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Login} />
        <Drawer.Screen name="Notifications" component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
);
// const SwitchNavigator = createSwitchNavigator(
//   {
//     Loading: Loading,
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

// const AppContainer = createAppContainer(SwitchNavigator);

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Login')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();