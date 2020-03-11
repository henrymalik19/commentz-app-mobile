import React, { useState, useContext, handleMsg } from 'react';
import { StyleSheet, Text, TextInput, Image, FlatList, KeyboardAvoidingView, View, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { StateContext } from '../../context/StateContext.js';


export default function ChatDetail({ route }) {

    let [{ socket, chats, currentUser }, setState] = useContext(StateContext);
    let [resTxt, setResTxt] = useState('');

    let msgs = chats[route.params.chatId].messages;

    socket.onmessage = (e) => {
        let data = JSON.parse(e.data);
        // CONFIRM THAT MESSAGE WAS SENT AND RECVD
        console.log(data);
    }

    const handleSubmit = () => {

        let newMsg = {
            chatId: route.params.chatId,
            id: (Math.floor(Math.random() * 1000) + 50).toString(),
            userId: currentUser.id,
            avatar: currentUser.avatar,
            recvd: false,
            message: resTxt.trim()
        }
        socket.send(JSON.stringify(newMsg));

        setState(prevState => ({
            ...prevState,
            chats: [
                ...prevState.chats,
                prevState.chats[route.params.chatId].messages = [newMsg, ...prevState.chats[route.params.chatId].messages]
            ],
        }))

        setResTxt('');
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <FlatList
                inverted
                keyExtractor={item => item.id}
                style={styles.msgList}
                data={msgs}
                renderItem={
                    ({ item }) => {
                        if (item.userId === currentUser.id) {
                            return (
                                <View style={styles.msgContainer}>
                                    <View style={styles.msgTextBoxMe}>
                                        <Text
                                            style={item.recvd ?
                                                styles.textMe :
                                                {
                                                    ...styles.textMe,
                                                    backgroundColor: 'red'
                                                }
                                            }
                                        >{item.message}</Text>
                                    </View>
                                    <View style={styles.AvatarMe}>
                                        <Image
                                            style={styles.AvatarImg}
                                            source={{ uri: currentUser.avatar }}
                                        />
                                    </View>
                                </View>
                            )
                        }
                        else {
                            return (
                                <View style={styles.msgContainer}>
                                    <View style={styles.Avatar}>
                                        <Image
                                            style={styles.AvatarImg}
                                            source={{ uri: item.avatar }}
                                        />
                                    </View>
                                    <View style={styles.msgTextBox}>
                                        <Text style={styles.text}>{item.message}</Text>
                                    </View>
                                </View>
                            )
                        }

                    }
                }
            />
            <View style={styles.respArea}>
                <TextInput
                    placeholder='Enter Message...'
                    style={styles.respInput}
                    value={resTxt}
                    onChangeText={(val) => setResTxt(val)}
                />
                <TouchableWithoutFeedback onPress={handleSubmit}>
                    <FontAwesome
                        name="send"
                        style={{
                            ...styles.respSend,
                            display: resTxt === '' ? 'none' : 'flex'
                        }}
                    />
                </TouchableWithoutFeedback>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    msgList: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    msgContainer: {
        flexDirection: 'row',
        marginTop: 2.5,
        marginBottom: 2.5,
        paddingTop: 5,
        paddingBottom: 5,
        // backgroundColor: 'orange'
    },
    Avatar: {
        flex: 1,
        // backgroundColor: 'pink'
    },
    AvatarMe: {
        flex: 1,
        alignItems: 'flex-end',
        // backgroundColor: 'blue'
    },
    AvatarImg: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    msgTextBox: {
        flex: 4,
        alignItems: 'flex-start'
    },
    msgTextBoxMe: {
        flex: 4,
        alignItems: 'flex-end'
    },
    text: {
        fontSize: 16,
        color: 'white',
        padding: 15,
        borderRadius: 15,
        backgroundColor: 'lightgrey',
    },
    textMe: {
        fontSize: 16,
        color: 'white',
        padding: 15,
        borderRadius: 15,
        backgroundColor: 'lightgreen'
    },
    respArea: {
        height: 60,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row'
    },
    respInput: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff'
    },
    respSend: {
        width: 60,
        fontSize: 24,
        marginLeft: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'lightgreen'
    }
});