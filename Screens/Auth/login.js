import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import { firebaseAuth } from '../../environment/config';

export default class Login extends React.Component {
    state = { email: '', password: '', errorMessage: null }
    handleLogin = () => {
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
                    value={this.state.email} />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password} />
                <TouchableOpacity onPress={this.handleLogin}>
                    <View style={styles.signupBtn}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </View>
                </TouchableOpacity>
                <Button
                    title="Don't have an account?" color="#0384fc"
                    onPress={() => this.props.navigation.navigate('SignUp')}
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