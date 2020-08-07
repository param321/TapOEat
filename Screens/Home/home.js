import React from 'react'
import { firebaseAuth } from '../../environment/config';
import { Alert, Platform, Image, View, Text, StyleSheet, Button } from 'react-native';
// import RecycleTestComponent from './restaurantView.js'
import firestore from '@react-native-firebase/firestore'


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null,
    restaurantData: null, }
  }
  async getRestaurantData() {
    console.log("I am getting data");
    var snapshot = await firestore()
    .collection('restaurants').get();
    console.log("I got data");
    var restaurantData = [];
    snapshot.forEach((doc) => {
      restaurantData.push(doc.data())
    });
    console.log(restaurantData);
  }

  componentDidMount() {
    const { currentUser } = firebaseAuth;
    this.setState({ currentUser });
    this.getRestaurantData();
    console.log("Yay")
  }
  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  recyclerview: {
    flex: 1,
  }
})