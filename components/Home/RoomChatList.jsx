import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RoomChatList() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Room List View</Text>
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