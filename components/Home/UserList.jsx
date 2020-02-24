import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function UserList() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>User List View</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});