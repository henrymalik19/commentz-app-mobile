import React, { useState, useContext } from 'react';
import { FlatList, View } from 'react-native';
import { StateContext } from '../../context/StateContext.js';

import ChatItem from './ChatItem.jsx';

// USED TO GENERATE FAKE DATA
import { generateUserData } from '../../utils/fakeData.js';
// USED TO GENERATE FAKE DATA

export default function ChatList({ navigation }) {

    const { chats } = useContext(StateContext);

    return (
        <View>
            <FlatList
                style={{ backgroundColor: '#fff' }}
                data={chats}
                renderItem={
                    ({ item }) => (
                        <ChatItem
                            name={item.name}
                            avatar={item.avatar}
                            message={item.message}
                            date={item.date}
                            onPress={() => navigation.navigate('ChatDetail', {
                                name: item.name
                            })}
                        />
                    )
                }
                keyExtractor={item => item.id}
            />
        </View>)
}