import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Header() {

    return (
        <View style={styles.container}>
            <Entypo name="message" style={styles.logo}></Entypo>
            <Text style={styles.name}>Commentz</Text>
            <Text style={styles.tagLine}>Express Your Opinion... Or Not!</Text>
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