import React, { useContext } from 'react';
import { Button, StyleSheet, Text, Image, View } from 'react-native';

import { StateContext } from '../../context/StateContext.js';

export default function Profile() {

    const context = useContext(StateContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile View</Text>
            <Image
                style={styles.AvatarImg}
                source={{ uri: context.currentUser.avatar }}
            />
            <Text style={styles.text}>Name: {context.currentUser.name}</Text>
            <Text style={styles.text}>Email: {context.currentUser.email}</Text>
            <Button title='Sign Out' color='lightgreen' onPress={() => context.handleAuth({ type: 'signout' })} />
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