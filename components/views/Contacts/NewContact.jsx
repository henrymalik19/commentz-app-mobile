import React, { useState } from 'react';
import { View, FlatList, Image, Text, TextInput, Button, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { getState } from '../../../context/StateContext.js';

export default function NewContact() {

    const [{ currentUser, refresh }, dispatch] = getState();
    const [value, setValue] = useState('');
    const [contacts, setContacts] = useState([]);

    const searchHandle = async () => {
        try {
            let res = await fetch('http://10.0.10.58:4000/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    handle: value,
                    currentUser
                }),
            });

            res = await res.json();
            if (res.error) throw new Error(res.error);
            setContacts(res.users);
        } catch (err) {
            console.log(err.message);
        }
    }

    const handleContact = async ({ id, task }) => {
        try {
            let res = await fetch(`http://10.0.10.58:4000/api/v1/user/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contactId: id,
                    task,
                    currentUser
                }),
            });
            res = await res.json();
            if (res.error) throw new Error(res.error);
            dispatch({ type: 'USER_UPDATE', payload: res.user });
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    style={{
                        flex: 1,
                        fontSize: 18,
                        textAlign: 'center'
                    }}
                    value={value}
                    placeholder='Enter A Handle'
                    onChangeText={(txt) => setValue(txt)}
                />
                <Button
                    title='Search'
                    onPress={searchHandle}
                    color='lightgreen'
                />
            </View>
            <FlatList
                style={styles.list}
                data={contacts}
                extraData={refresh}
                keyExtractor={item => item._id}
                renderItem={
                    ({ item }) => (
                        <View style={styles.contactContainer}>
                            <View style={styles.left}>
                                <Image
                                    style={styles.leftAvatar}
                                    source={{ uri: item.avatar }}
                                />
                            </View>
                            <View style={styles.center}>
                                <Text style={styles.centerTxt}>@{item.handle}</Text>
                                <Text style={styles.centerTxt}>{item.fname} {item.lname}</Text>
                            </View>
                            <View style={styles.right}>
                                {currentUser.contacts.some(contact => contact._id === item._id)
                                    ? (
                                        <TouchableWithoutFeedback onPress={() => handleContact({ id: item._id, task: 'REMOVE_CONTACT' })}>
                                            <FontAwesome
                                                name='remove'
                                                style={{
                                                    ...styles.rightIcon,
                                                    color: 'red',
                                                    padding: 5
                                                }} />
                                        </TouchableWithoutFeedback>
                                    )
                                    : (
                                        <TouchableWithoutFeedback onPress={() => handleContact({ id: item._id, task: 'ADD_CONTACT' })}>
                                            <Entypo
                                                name='check'
                                                style={{
                                                    ...styles.rightIcon,
                                                    color: 'lightgreen',
                                                    padding: 5,
                                                }} />
                                        </TouchableWithoutFeedback>
                                    )
                                }
                            </View>
                        </View>
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 125,
        padding: 10,
        // backgroundColor: 'yellow'
    },
    list: {
        flex: 1,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    contactContainer: {
        height: 100,
        flexDirection: 'row'
    },
    left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    center: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerTxt: {
        fontSize: 24
    },
    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightIcon: {
        fontSize: 24
    }
})