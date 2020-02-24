import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Footer(props) {

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback style={styles.Touch} onPress={() => props.changeTab('user')}>
                <FontAwesome name="user" style={props.currentTab === 'user' ? styles.Active : styles.Inactive}></FontAwesome>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback style={styles.Touch} onPress={() => props.changeTab('group')}>
                <FontAwesome name="group" style={props.currentTab === 'group' ? styles.Active : styles.Inactive}></FontAwesome>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        flexDirection: 'row'
    },
    Touch: {
        flex: 1
    },
    Inactive: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30,
        color: 'lightgrey'
    },
    Active: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30,
        color: 'lightgreen'
    }
});