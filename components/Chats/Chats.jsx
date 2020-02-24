import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from './Chat.jsx';
import ChatDetail from './ChatDetail.jsx';

import generateUserData from '../../utils/fakeData.js';

const Stack = createStackNavigator();

function List({ navigation }) {

    return (
    <View>
        <FlatList
            data={generateUserData(20)}
            renderItem={
                ({ item }) => (
                    <Chat
                        name={item.name}
                        avatar={item.avatar}
                        message={item.message}
                        date={item.date}
                        onPress={() => navigation.navigate('Details')}
                    />
                )
            }
            keyExtractor={item => item.id}
        />
    </View>)
}


export default function Chats() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='List' component={List} />
            <Stack.Screen name='Details' component={ChatDetail} />
        </Stack.Navigator>
    )
}