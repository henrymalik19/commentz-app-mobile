import React from 'react';
import { FlatList, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from './Chat.jsx';
import ChatDetail from './ChatDetail.jsx';

import { generateUserData } from '../../utils/fakeData.js';

const Stack = createStackNavigator();

function List({ navigation }) {

    return (
        <View>
            <FlatList
                style={{ backgroundColor: '#fff' }}
                data={generateUserData(20)}
                renderItem={
                    ({ item }) => (
                        <Chat
                            name={item.name}
                            avatar={item.avatar}
                            message={item.message}
                            date={item.date}
                            onPress={() => navigation.navigate('Details', {
                                name: item.name
                            })}
                        />
                    )
                }
                keyExtractor={item => item.id}
            />
        </View>)
}


export default function Chats() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: 'lightslategrey',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                },
                headerTintColor: 'lightgrey'
            }}
        >
            <Stack.Screen name='List' component={List} options={{ title: 'Commentz' }} />
            <Stack.Screen
                name='Details'
                component={ChatDetail}
                options={({ route }) => ({ title: route.params.name })}
            />
        </Stack.Navigator>
    )
}