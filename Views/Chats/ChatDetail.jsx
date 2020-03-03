import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Image, FlatList, View, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { generateMessages } from '../../utils/fakeData.js';

export default function ChatDetail() {

    let [msgs, setMsgs] = useState([]);
    let [responseVal, setResponseVal] = useState();

    let handleSendResp = () => {

        let msg = generateMessages(1)[0];
        msg.message = responseVal;
        msg.id = '50';

        // msgs.push(msg);
        setMsgs([...msgs, msg]);
        console.log(msgs);
        setResponseVal('');
    }

    return (
        <View style={styles.container}>
            <FlatList
                inverted
                style={styles.msgList}
                data={generateMessages(20)}
                extraData={msgs}
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
                                        <Text style={styles.text}>{item.message}</Text>
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
            <View style={styles.ResponseBox}>
                <TextInput
                    placeholder='Enter Message...'
                    style={styles.ResponseInput}
                    value={responseVal}
                    onChangeText={(val) => setResponseVal(val)}
                />
                <TouchableWithoutFeedback onPress={handleSendResp}>
                    <FontAwesome
                        name="send"
                        style={{
                            display: responseVal === '' ? 'none' : 'flex',
                            width: 60,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            fontSize: 24,
                            color: 'lightgreen',
                            borderRadius: 30
                        }}
                    />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    msgList: {
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
        padding: 15,
        borderRadius: 15,
        backgroundColor: 'lightgrey'
    },
    msgTextBoxMe: {
        flex: 4,
        padding: 15,
        borderRadius: 15,
        backgroundColor: 'lightgreen'
    },
    text: {
        fontSize: 16,
        color: 'white',
    },
    ResponseBox: {
        // flex: 1,
        flexDirection: 'row',
        height: 60
    },
    ResponseInput: {
        flex: 1,
        height: 60,
        padding: 15,
        backgroundColor: '#fff'
    }
});