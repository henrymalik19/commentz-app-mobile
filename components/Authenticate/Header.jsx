import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import StateContext from '../../Context'

export default function Header() {
    return (
        <StateContext.Consumer>
            {
                context => (
                    <View style={context.keyboardOpen ? stylesKBOpen.container : styles.container}>
                        <Entypo name="message" style={context.keyboardOpen ? stylesKBOpen.logo : styles.logo}></Entypo>
                        <Text style={context.keyboardOpen ? stylesKBOpen.name : styles.name}>Commentz</Text>
                        <Text style={context.keyboardOpen ? stylesKBOpen.tagLine : styles.tagLine}>Express Your Opinion... Or Not!</Text>
                    </View>
                )
            }
        </StateContext.Consumer>
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