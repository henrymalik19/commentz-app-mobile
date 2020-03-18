import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { getState } from '../../../context/StateContext.js';

import { Chat } from './models/Chat.js';

export default function NewChat({ navigation }) {

    const [{ currentUser, chats }, dispatch] = getState();
    const [val, setVal] = useState('');

    const handleClick = (caller) => {
        let chatIdx = chats.findIndex(chat => chat.recipient.id === caller._id);
        if (chatIdx === -1) {
            let chat = new Chat({
                recipient: {
                    id: caller._id,
                    name: `${caller.fname} ${caller.lname}`,
                    handle: caller.handle,
                    avatar: caller.avatar
                }
            });
            console.log(chat);
            dispatch({ type: 'CHAT_NEW_CHAT', payload: chat });
            navigation.navigate('ChatDetail', {
                name: chat.recipient.name,
                chatId: chat.id
            })
        } else {
            navigation.navigate('ChatDetail', {
                name: chats[chatIdx].recipient.name,
                chatId: chats[chatIdx].id
            })
        }
    }

    const search = (txt) => {
        setVal(txt);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.search}
                value={val}
                placeholder='Search...'
                onChangeText={search}
            />
            <FlatList
                keyExtractor={item => item._id}
                data={currentUser.contacts}
                renderItem={
                    ({ item }) => (
                        <View>
                            <TouchableOpacity onPress={() => handleClick(item)}>
                                <View style={styles.listItem}>
                                    <View style={styles.Left}>
                                        <Image
                                            style={styles.LeftAvatar}
                                            source={{ uri: item.avatar }}
                                        />
                                    </View>
                                    <View style={styles.Right}>
                                        <Text style={styles.RightText}>{item.fname} {item.lname}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    search: {
        height: 50,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        padding: 10,
        fontSize: 16,
        borderWidth: .25,
        borderColor: 'lightgrey',
        textAlign: 'center'
    },
    listItem: {
        height: 75,
        flexDirection: 'row'
    },
    Left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    LeftAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    Right: {
        flex: 4,
        justifyContent: 'center'
    },
    RightText: {
        fontSize: 18
    },
})