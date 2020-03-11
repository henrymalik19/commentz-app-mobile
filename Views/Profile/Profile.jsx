import React, { useContext } from 'react';
import { Button, StyleSheet, Text, Image, View } from 'react-native';

import { StateContext } from '../../context/StateContext.js';

export default function Profile() {

    const [state, setState] = useContext(StateContext);

    const handleAuth = () => {

        state.socket.close();

        setState({
            ...state,
            socket: '',
            authd: false,
            chats: '',
            currentUser: {
                id: '',
                name: '',
                email: '',
                avatar: ''
            }
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile View</Text>
            <Image
                style={styles.AvatarImg}
                source={{ uri: state.currentUser.avatar }}
            />
            <Text style={styles.text}>Name: {state.currentUser.name}</Text>
            <Text style={styles.text}>Email: {state.currentUser.email}</Text>
            <Button title='Sign Out' color='lightgreen' onPress={handleAuth} />
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
        borderRadius: 25
    },
    text: {
        marginBottom: 20
    }
});