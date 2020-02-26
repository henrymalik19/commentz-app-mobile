import React from './node_modules/react';
import { StyleSheet, Text, TextInput, Image, FlatList, View } from 'react-native';

import { generateMessages } from '../../utils/fakeData.js';

export default function ChatDetail() {

    let data = generateMessages(20);

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.msgList}
                data={data}
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
            <View>
                <TextInput placeholder='Enter Message...' style={styles.msgInput}></TextInput>
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
    msgInput: {
        height: 60,
        padding: 15,
        backgroundColor: '#fff'
    }
});