import React from './node_modules/react';
import { FlatList, View } from 'react-native';

import ChatItem from './ChatItem.jsx';

import { generateUserData } from '../../utils/fakeData.js';

export default function ChatList({ navigation }) {

    return (
        <View>
            <FlatList
                style={{ backgroundColor: '#fff' }}
                data={generateUserData(20)}
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