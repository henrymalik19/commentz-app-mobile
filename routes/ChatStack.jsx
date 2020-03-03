import React from 'react';
import { StyleSheet, TextInput, Text, TouchableWithoutFeedback, Button } from 'react-native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import ChatList from '../views/Chats/ChatList.jsx';
import ChatDetail from '../views/Chats/ChatDetail.jsx';

const Stack = createStackNavigator();

export default function ChatStack(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: 'lightslategrey',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                },
                headerTintColor: 'lightgrey',
                headerLeft: ({ canGoBack }) => {
                    if (canGoBack === true) {
                        return (
                            <TouchableWithoutFeedback onPress={props.navigation.goBack}>
                                <MaterialIcons name="arrow-back" style={styles.headerLeftBack} />
                            </TouchableWithoutFeedback>
                        )
                    } else {
                        return (
                            <TouchableWithoutFeedback onPress={props.navigation.toggleDrawer}>
                                <MaterialIcons name="menu" style={styles.headerLeftMain} />
                            </TouchableWithoutFeedback>
                        )
                    }
                },
                headerRight: () => {
                    return (
                        <TouchableWithoutFeedback >
                            <MaterialIcons name="search" style={styles.headerRightSearch} />
                        </TouchableWithoutFeedback>
                    )
                }
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

const styles = StyleSheet.create({
    headerLeftMain: {
        flex: 1,
        width: 50,
        marginLeft: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'lightgrey',
        fontSize: 32,
    },
    headerLeftBack: {
        flex: 1,
        width: 50,
        marginLeft: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'lightgrey',
        fontSize: 32
    },
    headerRightSearch: {
        flex: 1,
        width: 50,
        marginRight: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'lightgrey',
        fontSize: 32,
        // backgroundColor: 'red'
    }
});