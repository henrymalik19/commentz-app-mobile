import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import ChatList from '../views/Chats/ChatList.jsx';
import NewChat from '../views/Chats/NewChat.jsx';
import ChatDetail from '../views/Chats/ChatDetail.jsx';

const Stack = createStackNavigator();

export default function ChatStack(props) {

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior='padding'
        >
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
                                <TouchableWithoutFeedback onPress={() => props.navigation.navigate('ChatList')}>
                                    <MaterialIcons name="arrow-back" style={styles.headerLeftBtns} />
                                </TouchableWithoutFeedback>
                            )
                        } else {
                            return (
                                <TouchableWithoutFeedback onPress={props.navigation.toggleDrawer}>
                                    <MaterialIcons name="menu" style={styles.headerLeftBtns} />
                                </TouchableWithoutFeedback>
                            )
                        }
                    },
                    headerRight: () => {
                        return (
                            <TouchableWithoutFeedback onPress={() => props.navigation.navigate('NewChat')}>
                                <Entypo name="new-message" style={styles.headerRightBtns} />
                            </TouchableWithoutFeedback>
                        )
                    }
                }}
            >
                <Stack.Screen name='ChatList' component={ChatList} options={{ title: 'Commentz' }} />
                <Stack.Screen name='NewChat' component={NewChat} options={{ title: 'Select a Contact' }} />
                <Stack.Screen
                    name='ChatDetail'
                    component={ChatDetail}
                    options={({ route }) => ({ title: route.params.name })}
                />
            </Stack.Navigator>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    headerLeftBtns: {
        flex: 1,
        width: 50,
        marginLeft: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'lightgrey',
        fontSize: 32,
    },
    headerRightBtns: {
        flex: 1,
        width: 50,
        marginRight: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'lightgrey',
        fontSize: 24,
    }
});