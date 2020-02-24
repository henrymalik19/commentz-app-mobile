import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatsList from './ChatsList.jsx';
import ChatsListItemDetail from './ChatsListItemDetail.jsx';

const Stack = createStackNavigator();

export default function Chats() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Chats' component={ChatsList} />
            <Stack.Screen name='Details' component={ChatsListItemDetail} />
        </Stack.Navigator>
    )
}