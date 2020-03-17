import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getState } from '../../context/StateContext.js';

import { generateChat } from '../../utils/fakeData.js';

export default function NewChat({ navigation }) {

    const [state, dispatch] = getState();

    const handleClick = () => {
        let chat = generateChat(1, 1, state.currentUser.id)[0];
        dispatch({ type: 'CHAT_NEW_CHAT', payload: chat });
        navigation.navigate('ChatDetail', {
            name: chat.name,
            chatId: chat.id
        })
    }

    return (
        <View style={styles.container}>
            <Text>Hello New Chat</Text>
            <Button title='Add New Chat!' onPress={handleClick}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})