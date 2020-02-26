import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// IMPORT COMPONENTS
import ChatStack from '../routes/ChatStack.jsx';
import RoomStack from '../routes/RoomStack.jsx';

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function HomeTab() {

    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    borderTopColor: '#fff'
                },
                showLabel: false,
                activeTintColor: 'lightgreen',
                inactiveTintColor: 'lightgrey',
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    switch (route.name) {
                        case 'Chats':
                            return <FontAwesome name="user" size={size} color={color}></FontAwesome>
                        case 'Rooms':
                            return <FontAwesome name="group" size={size} color={color}></FontAwesome>
                    }
                },
            })}
        >
            <Tab.Screen
                name='Chats'
                component={ChatStack}
            />
            <Tab.Screen
                name='Rooms'
                component={RoomStack}
            />
        </Tab.Navigator>
    )
}