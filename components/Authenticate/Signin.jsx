import React from 'react';
import { StyleSheet, TextInput, Text, Button, KeyboardAvoidingView } from 'react-native';

export default function Signin(props) {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput placeholder="Email" style={styles.inputBoxE}></TextInput>
            <TextInput placeholder="Password" style={styles.inputBoxP} secureTextEntry></TextInput>
            <Button title={'Sign In'} color='#90EE90'></Button>
            <Text style={styles.text}>Don't Have An Account?</Text>
            <Button title={'Sign Up'} color='#90EE90' onPress={props.changeView} ></Button>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2.25,
        justifyContent: 'flex-end',
        paddingLeft: 50,
        paddingRight: 50,
        marginBottom: 80,
    },
    inputBoxE: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 40,
    },
    inputBoxP: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 40
    },
    text: {
        marginTop: 120,
        marginBottom: 40,
        textAlign: 'center',
        color: '#aaa'
    }
});