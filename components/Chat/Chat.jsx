import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// IMPORT COMPONENTS
import Header from './Header.jsx';

export default function Chat() {
    return (
        <View style={styles.container}>
            <Header />
            <Text>Home</Text>
        </View>
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