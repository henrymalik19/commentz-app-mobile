import React, { useContext, useState } from 'react';
import { FlatList, View } from 'react-native';
import { StateContext } from '../../context/StateContext.js';

import ChatItem from './ChatItem.jsx';

export default function ChatList({ navigation }) {

    const [state, setState] = useContext(StateContext);
    let [chats, setChats] = useState(state.chats);

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