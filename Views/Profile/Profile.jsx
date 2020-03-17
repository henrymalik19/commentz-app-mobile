import React from 'react';
import { Button, StyleSheet, Text, Image, View } from 'react-native';

import { getState } from '../../context/StateContext.js';

export default function Profile() {

    const [{ socket, currentUser }, dispatch] = getState();

    const handleClick = () => {
        dispatch({ type: 'AUTH_SIGNOUT_ATTEMPT' });
        socket.send(JSON.stringify({ type: 'CLOSE_CONN_REQ' }));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile View</Text>
            <Image
                style={styles.AvatarImg}
                source={{ uri: currentUser.avatar }}
            />
            <Text style={styles.text}>First Name: {currentUser.fname}</Text>
            <Text style={styles.text}>Last Name: {currentUser.lname}</Text>
            <Text style={styles.text}>Handle: @{currentUser.handle}</Text>
            <Text style={styles.text}>Email: {currentUser.email}</Text>
            <Button title='Sign Out' color='lightgreen' onPress={handleClick} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    AvatarImg: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 25
    },
    text: {
        margin: 20
    }
});