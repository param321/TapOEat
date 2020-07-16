import React from 'react'
import { firebaseAuth } from '../environment/config';
import { Alert, Platform, Image, View, Text, StyleSheet, Button } from 'react-native';

export default class signOut extends React.Component {
    constructor(props) {
      super(props);
    }
    onPressButton = () => {
      console.log('PressButton');
      firebaseAuth.signOut()
        .then(() => this.props.navigation.navigate('Auth'))
        .catch(error => console.log(error));
    }
    render() {
      this.onPressButton();
      return (
          <View>
              <Text>Loadingg........</Text>
          </View>
      )
    }
  }