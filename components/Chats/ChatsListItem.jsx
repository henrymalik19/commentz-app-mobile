import React from 'react';
import { StyleSheet, Text, Image, TouchableWithoutFeedback, View } from 'react-native';

export default function ChatListItem(props) {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image
                        style={styles.leftAvatar}
                        source={{ uri: props.avatar }}
                    />
                </View>

                <View style={styles.center}>
                    <Text style={styles.centerName}>{props.name}</Text>
                    <Text numberOfLines={2} style={styles.centerMsg}>{props.message}</Text>
                </View>

                <View style={styles.right}>
                    <Text style={styles.rightDate}>{props.date}</Text>
                    <Text style={styles.rightUnread}>2</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 2,
        marginBottom: 2,
        padding: 15,
        // borderBottomColor: 'black',
        // borderBottomWidth: 2
    },
    left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftAvatar: {
        width: 50,
        height: 50
    },
    center: {
        flex: 4,
        paddingLeft: 15,
        paddingRight: 15,
    },
    centerName: {
        paddingBottom: 5,
        fontWeight: 'bold',
        color: 'lightslategrey'
    },
    centerMsg: {
        color: 'lightgrey'
    },
    right: {
        flex: 1,
        justifyContent: 'flex-start',
        // backgroundColor: 'yellow'
    },
    rightDate: {
        fontSize: 10,
        marginBottom: 10,
        textAlign: 'center',
        color: 'lightgrey'
    },
    rightUnread: {
        width: 18,
        height: 18,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 12,
        backgroundColor: 'lightgreen',
        color: '#fff',
        borderRadius: 9
    }
});