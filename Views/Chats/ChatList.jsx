import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { getState } from '../../context/StateContext.js';

import ChatItem from './ChatItem.jsx';

export default function ChatList({ navigation }) {

    const [{ chats, refresh }, dispatch] = getState();

    return (
        <View>
            <FlatList
                style={{ backgroundColor: '#fff' }}
                data={chats}
                extraData={refresh}
                renderItem={
                    ({ item }) => (
                        <ChatItem
                            name={item.name}
                            avatar={item.avatar}
                            message={item.messages[0].message}
                            date={item.date}
                            onPress={() => navigation.navigate('ChatDetail', {
                                name: item.name,
                                chatId: item.id
                            })}
                        />
                    )
                }
                keyExtractor={item => item.id}
            />
        </View>)
}