import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/Home/home';
import Contact from '../Screens/Contacts Us/contact';
import Login from '../Screens/Auth/login';
import SignUp from '../Screens/Auth/Signup';
import Loading from '../Screens/Auth/Loading';
import Account from '../Screens/Account/account';
import Order from '../Screens/Orders/orders';
import locationScreen from '../Screens/location';
export const Navigator = () => (
  <AppContainer />
);

class NavigationDrawerStructure extends React.Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => { this.toggleDrawer() }}>
          {/*Donute Button Image */}
          <Image
            source={require('../image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstDrawerNav = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: () => (<NavigationDrawerStructure navigationProps={navigation} />),
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondDrawerNav = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Contact,
    navigationOptions: ({ navigation }) => ({
      title: 'Contact Us',
      headerLeft: () => (<NavigationDrawerStructure navigationProps={navigation} />),
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const ThirdDrawerNav = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Third: {
    screen: Order,
    navigationOptions: ({ navigation }) => ({
      title: 'Orders',
      headerLeft: () => (<NavigationDrawerStructure navigationProps={navigation} />),
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const FourthDrawerNav = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Fourth: {
    screen: Account,
    navigationOptions: ({ navigation }) => ({
      title: 'Account',
      headerLeft: () => (<NavigationDrawerStructure navigationProps={navigation} />),
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const FifthDrawerNav = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Fifth: {
    screen: locationScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'locationScreen',
      headerLeft: () => (<NavigationDrawerStructure navigationProps={navigation} />),
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});


const AuthStack = createStackNavigator({ LoginPage: Login, SignUpPage: SignUp });

const AuthLoadingScreen = createStackNavigator({LoadingPage:Loading});

const DrawerNavigator = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstDrawerNav,
    navigationOptions: {
      drawerLabel: 'Home :)',
    },
  },
  Screen2: {
    //Title
    screen: ThirdDrawerNav,
    navigationOptions: {
      drawerLabel: 'Orders :)',
    },
  },
  Screen3: {
    //Title
    screen: FourthDrawerNav,
    navigationOptions: {
      drawerLabel: 'Account :)',
    },
  },
  Screen4: {
    //Title
    screen: SecondDrawerNav,
    navigationOptions: {
      drawerLabel: 'Contact Us :)',
    },
  },
  Screen5: {
    //Title
    screen: FifthDrawerNav,
    navigationOptions: {
      drawerLabel: 'Location :)',
    },
  },
});

const AppContainer = createAppContainer(
  createSwitchNavigator({
      AuthLoading: AuthLoadingScreen,
      App: DrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);