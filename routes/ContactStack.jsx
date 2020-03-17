import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, Entypo } from '@expo/vector-icons';


import ContactList from '../views/Contacts/ContactList.jsx';
import NewContact from '../views/Contacts/NewContact.jsx';

const Stack = createStackNavigator();

export default function ContactStack(props) {

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
                                <TouchableWithoutFeedback onPress={() => props.navigation.navigate('ContactList')}>
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
                            <TouchableWithoutFeedback onPress={() => props.navigation.navigate('NewContact')}>
                                <Entypo name="plus" style={styles.headerRightBtns} />
                            </TouchableWithoutFeedback>
                        )
                    }
                }}
            >
                <Stack.Screen name='ContactList' component={ContactList} options={{ title: 'Contacts' }} />
                <Stack.Screen name='NewContact' component={NewContact} options={{ title: 'Add A New Contact' }} />

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