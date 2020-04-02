import React, {Component} from 'react';
import {Text, View, Button } from 'react-native';

export default class Home extends Component{
  render() {
    return (
      <View>
        <Text>Hello Mr.XXX</Text>
        <Button title="Sign Out" onPress={()=>this.props.navigation.navigate('Login')}/>
      </View>
    );
  }
}