import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import { getState } from '../../../context/StateContext.js';

export default function ContactList() {

    const [{ currentUser, refresh }, dispatch] = getState();

    return (
        <FlatList
            style={styles.list}
            data={currentUser.contacts}
            extraData={refresh}
            keyExtractor={item => item._id}
            renderItem={
                ({ item }) => (
                    <View style={styles.listItem}>
                        <View style={styles.Left}>
                            <Image
                                style={styles.LeftAvatar}
                                source={{ uri: item.avatar }}
                            />
                        </View>
                        <View style={styles.Right}>
                            <Text style={styles.RightText}>{item.fname} {item.lname}</Text>
                        </View>
                    </View>
                )
            }
        />
    )
}

const styles = StyleSheet.create({
    list: {

    },
    listItem: {
        height: 75,
        flexDirection: 'row',
        // backgroundColor: 'yellow'
    },
    Left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    LeftAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    Right: {
        flex: 4,
        justifyContent: 'center'
    },
    RightText: {
        fontSize: 18
    },
})