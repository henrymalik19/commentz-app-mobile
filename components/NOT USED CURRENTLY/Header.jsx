import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {

    return (
        <View style={styles.container}>
            <MaterialIcons name="menu" style={styles.Icons}></MaterialIcons>
            <Text style={styles.Name}>Commentz</Text>
            <MaterialIcons name="search" style={styles.Icons}></MaterialIcons>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 75,
        flexDirection: 'row'
    },
    Name: {
        flex: 3,
        textAlign: 'center',
        textAlignVertical: 'center',
        textTransform: 'uppercase',
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: 'monospace',
        color: 'lightslategrey',
    },
    Icons: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30,
        color: 'lightgrey'
    }
});