import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getState } from '../../context/StateContext.js';


import HomeTab from './HomeTab';
// TESTING BELOW ########################
import ChatStack from './ChatStack.jsx';
import RoomStack from './RoomStack.jsx';
import ContactStack from './ContactStack.jsx';
// TESTING ABOVE ########################
import Profile from '../views/Profile/Profile.jsx';

const Drawer = createDrawerNavigator();

export default function MainDraw() {

    const [{ authed, loading }, dispatch] = getState();

    if (authed && !loading) return (
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
                {/* <Drawer.Screen name="Home" component={HomeTab} /> */}
                {/* // TESTING BELOW ######################## */}
                <Drawer.Screen name="Chats" component={ChatStack} />
                <Drawer.Screen name="Rooms" component={RoomStack} />
                {/* // TESTING ABOVE ######################## */}
                <Drawer.Screen name="Contacts" component={ContactStack} />
                <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
        </NavigationContainer>
    )

    return null
}



