import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatList from '../views/Chats/ChatList.jsx';
import ChatDetail from '../views/Chats/ChatDetail.jsx';

const Stack = createStackNavigator();

export default function ChatStack() {
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
            <Stack.Screen name='ChatList' component={ChatList} options={{ title: 'Commentz' }} />
            <Stack.Screen
                name='ChatDetail'
                component={ChatDetail}
                options={({ route }) => ({ title: route.params.name })}
            />
        </Stack.Navigator>
    )
}