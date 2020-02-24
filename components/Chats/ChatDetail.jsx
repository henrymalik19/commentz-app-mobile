import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function ChatDetail(props) {
    console.log(props);
    return (
        <View style={styles.container}>
            <Text>Chats List Item Detail</Text>
            <View>
                <TextInput placeholder='Enter Message...'></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    }
});