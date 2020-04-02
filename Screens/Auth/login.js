import React, { Component } from 'react';
import { View, Button, Text, ScrollView, TextInput} from 'react-native';

export default class Login extends Component {
  constructor() {
    super();
    this.state = { data: {}, ratings: [], handle: "" };
  }
  load = (hand) => {
    this.state.ratings=[];
    this.cfFetch(hand);
  }
  cfFetch = (hand) => {
    var s='https://codeforces.com/api/user.rating?handle='+hand;
    return fetch(s)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson });
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    if (this.state.data.result) {
      for (var i in this.state.data.result) {
        this.state.ratings.push(this.state.data.result[i].newRating);
      }
      this.state.ratings.reverse();
      console.log(this.state.ratings);
    }
    var rating = [];

    for (var i in this.state.ratings) {
      rating.push(
        <View key={i}>
          <Text>{this.state.ratings[i]}</Text>
        </View>
      )
    }
    return (
      <View>
        <View>
          <Button title="Login" onPress={() => this.props.navigation.navigate('Home')} />
          <Button title="Load" onPress={() => this.load(this.state.handle)} />
          <TextInput
            style={{ height: 40,backgroundColor:'white', borderColor: 'gray', borderWidth: 1 ,marginHorizontal:20}}
            onChangeText={text => this.setState({handle:text})}
            value={this.state.handle}
          />
        </View>
        <ScrollView>{rating}</ScrollView>
      </View>
    );
  }
}