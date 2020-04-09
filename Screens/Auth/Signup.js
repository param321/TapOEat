import React from 'react';
import { firebaseAuth } from '../../environment/config';
import firestore from '@react-native-firebase/firestore';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';

export default class SignUp extends React.Component {
    state = { email: '', password: '', repassword: '', name: '', number: '', errorMessage: null }
    handleSignUp = () => {
        if (this.state.email.length == 0 || this.state.name.length == 0 || this.state.password.length == 0 || this.state.repassword == 0 || this.state.number == 0) {
            alert("Please Fill All The Details");
        } else if (this.state.password != this.state.repassword) {
            alert("Password Mismatch");
        } else if (this.state.number.length < 10 || this.state.number.length > 12) {
            alert("Enter A Valid Contact Number");
        } else {
            console.log('handleSignUp')
            firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(this.createuser())
                .catch(error => this.setState({ errorMessage: error.message }));
        }
    }
    async createuser() {
        let user = firebaseAuth.currentUser;
        if (user) {
            console.log("Yayy");
            var dbuser = firestore().collection("users").doc(user.uid).set({
                name: this.state.name,
                email: this.state.email,
                contact: this.state.number,
            });
            this.props.navigation.navigate('Main');
        }else {
            console.log("not signed in");
            setInterval(() => {
                this.createuser();
            }, 1000);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headingSection}>
                    <Image source={require('../../login_background.jpeg')}
                        style={{ width: 200, height: 100 }} />
                </View>
                <Text style={styles.heading}>Sign Up</Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    placeholder="Name"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Re-Type Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={(repassword) => this.setState({ repassword })}
                    value={this.state.repassword}
                />
                <TextInput
                    placeholder="Contact Number"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={(number) => this.setState({ number })}
                    value={this.state.number}
                />
                <TouchableOpacity onPress={this.handleSignUp}>
                    <View style={styles.signupBtn}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
                <Button color="#0384fc"
                    title="Already have an account?"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        )
    }
}
const heightConst = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    container: {
        height: heightConst - 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingSection: {
        borderColor: 1,
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 10
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