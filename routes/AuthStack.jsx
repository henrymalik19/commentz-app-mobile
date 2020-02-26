import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Signin from '../views/Authenticate/Signin.jsx';
import Signup from '../views/Authenticate/Signup.jsx';

const Stack = createStackNavigator();

export default function AuthStack() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode='none'
            >
                <Stack.Screen name='signin' component={Signin} />
                <Stack.Screen name='signup' component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}