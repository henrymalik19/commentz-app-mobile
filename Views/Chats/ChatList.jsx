import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import ChatItem from './ChatItem.jsx';

import { generateUserData } from '../../utils/fakeData.js';

export default function ChatList({ navigation }) {

    let [chats, setChats] = useState(generateUserData(20))
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