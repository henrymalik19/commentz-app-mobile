import React, { useContext } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';

import { StateContext } from '../../StateContext.js';

export default function Signup(props) {

    const context = useContext(StateContext);

    return (
        <View style={styles.container}>
            <TextInput placeholder="Name" style={styles.inputBox} clearTextOnFocus></TextInput>
            <TextInput placeholder="Email" style={styles.inputBox}></TextInput>
            <TextInput placeholder="Password" style={styles.inputBox} secureTextEntry></TextInput>
            <TextInput placeholder="Confirm Password" style={styles.inputBox} secureTextEntry></TextInput>
            <Button title={'Sign Up'} color='#90EE90' style={styles.button} onPress={() => context.handleAuth({ type: 'signup' })}></Button>
            <Text style={styles.text}>Have An Account?</Text>
            <Button title={'Sign In'} color='#90EE90' onPress={props.changeView}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2.25,
        justifyContent: 'flex-end',
        paddingLeft: 50,
        paddingRight: 50,
        marginBottom: 80
    },
    inputBox: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20
    },
    text: {
        marginTop: 60,
        marginBottom: 40,
        textAlign: 'center',
        color: '#aaa'
    }
});