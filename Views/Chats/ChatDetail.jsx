import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, TextInput, Image, FlatList, KeyboardAvoidingView, View, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { StateContext } from '../../context/StateContext.js';

import { generateMessages } from '../../utils/fakeData.js';

// let ws = new WebSocket('ws://10.0.10.58:6000');

// ws.onopen = () => {
//     // connection opened
//     ws.send('hello'); // send a message
// };

// ws.onmessage = (e) => {
//     // a message was received
//     console.log(e.data);
// };


export default function ChatDetail() {

    let context = useContext(StateContext);

    let [msgs, setMsgs] = useState(generateMessages(20));
    let [resVal, setResVal] = useState('');

    // useEffect(() => {
    // ws.onmessage = (e) => {
    //     // a message was received
    //     console.log(e.data);
    //     let newMsg = generateMessages(1)[0];
    //     let newMsg2 = generateMessages(1)[1];
    //     setMsgs([newMsg, newMsg2, ...msgs]);
    //     // setMsgs([newMsg2, ...msgs]);
    //     console.log(newMsg);
    //     // data.push(newMsg);
    // };
    // }, []);

    let handleSubmit = () => {
        // ws.send();
        let newMsg = {
            id: (Math.floor(Math.random() * 1000) + 50).toString(),
            userId: context.currentUser.id,
            avatar: context.currentUser.avatar,
            message: resVal
        }

        setMsgs([newMsg, ...msgs]);

        setResVal('');
    }



    return (
        <KeyboardAvoidingView style={styles.container}>
            <FlatList
                inverted
                style={styles.msgList}
                data={msgs}
                renderItem={
                    ({ item }) => {

                        if (item.userId === '1') {
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
                        else {
                            return (
                                <View style={styles.msgContainer}>
                                    <View style={styles.msgTextBoxMe}>
                                        <Text style={styles.textMe}>{item.message}</Text>
                                    </View>
                                    <View style={styles.AvatarMe}>
                                        <Image
                                            style={styles.AvatarImg}
                                            source={{ uri: item.avatar }}
                                        />
                                    </View>
                                </View>
                            )
                        }

                    }
                }
                keyExtractor={item => item.id}
            />
            <View style={styles.respArea}>
                <TextInput
                    placeholder='Enter Message...'
                    style={styles.respInput}
                    value={resVal}
                    onChangeText={(val) => setResVal(val)}
                />
                <TouchableWithoutFeedback onPress={handleSubmit}>
                    <FontAwesome
                        name="send"
                        style={{
                            ...styles.respSend,
                            display: resVal === '' ? 'none' : 'flex'
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
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10,
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