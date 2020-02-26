import React from './node_modules/react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from './node_modules/@expo/vector-icons';


export default function Header({ keyboardOpen }) {

    return (
        <View style={keyboardOpen ? stylesKBOpen.container : styles.container}>
            <Entypo name="message" style={keyboardOpen ? stylesKBOpen.logo : styles.logo}></Entypo>
            <Text style={keyboardOpen ? stylesKBOpen.name : styles.name}>Commentz</Text>
            <Text style={keyboardOpen ? stylesKBOpen.tagLine : styles.tagLine}>Express Your Opinion... Or Not!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        marginTop: 60
    },
    logo: {
        textAlign: 'center',
        fontSize: 70,
        color: '#90EE90',
        transform: [
            { rotateY: '180deg' }
        ]
    },
    name: {
        flex: 1,
        textAlignVertical: 'bottom',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#778899'
    },
    tagLine: {
        flex: 1,
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
        color: '#778899'
    }
});

const stylesKBOpen = StyleSheet.create({
    container: {
        height: 200,
        marginTop: -5,
    },
    logo: {
        display: 'none'
    },
    name: {
        flex: 1,
        textAlignVertical: 'bottom',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#778899'
    },
    tagLine: {
        flex: 1,
        textAlign: 'center',
        marginTop: 10,
        fontSize: 12,
        color: '#778899',
    }
});