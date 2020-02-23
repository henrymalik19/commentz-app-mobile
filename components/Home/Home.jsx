import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView } from 'react-native';

export default function Home() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text>Home</Text>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2.25,
        // justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30,
        // backgroundColor: '#3f7534'
    },
    text: {
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
        color: '#aaa'
    }
})