import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// IMPORT COMPONENTS
import Chats from '../Chats/Chats.jsx';
import Rooms from '../Rooms/Rooms.jsx';

const Tab = createBottomTabNavigator();

export default function Home() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    activeTintColor: 'lightgreen',
                    inactiveTintColor: 'lightgrey'
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
                    component={Chats}
                />
                <Tab.Screen
                    name='Rooms'
                    component={Rooms}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}