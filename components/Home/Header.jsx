import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function Header(props) {

    const pressHandler = () => {
        alert('pressed')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <MaterialIcons name="menu" style={styles.topBarIcons}></MaterialIcons>
                <Text style={styles.topBarName}>Commentz</Text>
                <MaterialIcons name="search" style={styles.topBarIcons}></MaterialIcons>
            </View>
            <View style={styles.bottomBar}>
                <TouchableWithoutFeedback style={styles.bottomBarTouch} onPress={() => props.changeTab('user')}>
                    <FontAwesome name="user" style={props.currentTab === 'user' ? styles.bottomBarActive : styles.bottomBarInactive}></FontAwesome>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.bottomBarTouch} onPress={() => props.changeTab('group')}>
                    <FontAwesome name="group" style={props.currentTab === 'group' ? styles.bottomBarActive : styles.bottomBarInactive}></FontAwesome>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 200,

    },
    topBar: {
        flex: 1,
        flexDirection: 'row'
    },
    topBarName: {
        flex: 3,
        textAlign: 'center',
        textAlignVertical: 'center',
        textTransform: 'uppercase',
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: 'monospace',
        color: 'lightslategrey'
    },
    topBarIcons: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30,
        color: 'lightgrey'
    },
    bottomBar: {
        flex: 1,
        flexDirection: 'row'
    },
    bottomBarTouch: {
        flex: 1
    },
    bottomBarInactive: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30,
        color: 'lightgrey'
    },
    bottomBarActive: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30,
        color: 'lightgreen'
    }
});