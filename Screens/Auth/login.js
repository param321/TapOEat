// import React, { Component } from 'react';
// import { View, Button, Text, ScrollView, TextInput} from 'react-native';

// export default class Login extends Component {
//   constructor() {
//     super();
//     this.state = { data: {}, ratings: [], handle: "" };
//   }
//   load = (hand) => {
//     this.state.ratings=[];
//     this.cfFetch(hand);
//   }
//   cfFetch = (hand) => {
//     var s='https://codeforces.com/api/user.rating?handle='+hand;
//     return fetch(s)
//       .then((response) => response.json())
//       .then((responseJson) => {
//         this.setState({ data: responseJson });
//         return responseJson;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
//   render() {
//     if (this.state.data.result) {
//       for (var i in this.state.data.result) {
//         this.state.ratings.push(this.state.data.result[i].newRating);
//       }
//       this.state.ratings.reverse();
//       console.log(this.state.ratings);
//     }
//     var rating = [];

//     for (var i in this.state.ratings) {
//       rating.push(
//         <View key={i}>
//           <Text>{this.state.ratings[i]}</Text>
//         </View>
//       )
//     }
//     return (
//       <View>
//         <View>
//           <Button title="Login" onPress={() => this.props.navigation.navigate('Home')} />
//           <Button title="Load" onPress={() => this.load(this.state.handle)} />
//           <TextInput
//             style={{ height: 40,backgroundColor:'white', borderColor: 'gray', borderWidth: 1 ,marginHorizontal:20}}
//             onChangeText={text => this.setState({handle:text})}
//             value={this.state.handle}
//           />
//         </View>
//         <ScrollView>{rating}</ScrollView>
//       </View>
//     );
//   }
// }

import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import { firebaseAuth } from '../../environment/config';

export default class Login extends React.Component {
state = { email: '', password: '', errorMessage: null }
handleLogin = () => {
// TODO: Firebase stuff...
console.log('handleLogin')
firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password).then(() => this.props.navigation.navigate('Main'))
.catch(error => this.setState({ errorMessage: error.message }));
}
render() {
return (
   <View style={styles.container}>
    <View style={styles.headingSection}>
     <Image source={require('../../login_background.jpeg')} 
      style={{ width: 200, height: 200 }} />
    </View>
     <Text style={styles.heading}>Login</Text>
     {this.state.errorMessage &&
      <Text style={{ color: 'red' }}>
       {this.state.errorMessage}
       </Text>}
       <TextInput
       placeholder="Email"
       autoCapitalize="none"
       style={styles.textInput}
       onChangeText={email => this.setState({ email })}
       value={this.state.email}/>
       <TextInput
       secureTextEntry
       placeholder="Password"
       autoCapitalize="none"
       style={styles.textInput}
       onChangeText={password => this.setState({ password })}
       value={this.state.password}/>
      <TouchableOpacity onPress={this.handleLogin}>
        <View style={styles.signupBtn}>
          <Text style={styles.buttonText}>Log In</Text>
        </View>
      </TouchableOpacity>
     <Button
     title="Don't have an account? Sign Up" color="#0384fc"
     onPress={() => this.props.navigation.navigate('SignUp')}
     />
  </View>
)}
}
const heightConst = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    container: {
        height: heightConst-250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingSection: {
        borderColor: 1,
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    heading: {
        color: '#0384fc',
        fontSize: 26,
        marginBottom: 10
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 8,
        color: 'black'
    },
    signupBtn: {
        borderRadius: 5,
        marginBottom: 5,
        backgroundColor: '#0384fc',
        borderWidth: 1,
        borderColor: '#fff',
        width: 100,
        height: 35,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }
})