import React from 'react'
import { firebaseAuth } from '../../environment/config';
import { Alert, Platform, Image, View, Text, StyleSheet, Button } from 'react-native';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null }
  }
  componentDidMount() {
    const { currentUser } = firebaseAuth;
    this.setState({ currentUser })
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
  }
})