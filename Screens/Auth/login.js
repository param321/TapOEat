import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View>
        <Button title="Login" onPress={()=>this.props.navigation.navigate('Home')}/>
      </View>
    );
  }
}