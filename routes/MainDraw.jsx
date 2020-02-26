import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeTab from './HomeTab';
// TESTING BELOW ########################
import ChatStack from './ChatStack.jsx';
import RoomStack from './RoomStack.jsx';
// TESTING ABOVE ########################
import Profile from '../views/Profile/Profile.jsx';

const Drawer = createDrawerNavigator();

export default function MainDraw() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerType='slide'
                drawerContentOptions={{
                    activeTintColor: 'white',
                    activeBackgroundColor: 'rgba(144, 238, 144,0.55)',
                    inactiveTintColor: 'lightslategrey',
                    labelStyle: { fontSize: 20 }
                }}
            >
                <Drawer.Screen name="Home" component={HomeTab} />
                {/* // TESTING BELOW ######################## */}
                <Drawer.Screen name="Chats" component={ChatStack} />
                <Drawer.Screen name="Rooms" component={RoomStack} />
                {/* // TESTING ABOVE ######################## */}
                <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}



