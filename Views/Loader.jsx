import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { getState } from '../context/StateContext.js';

export default function Loader() {

    const [{ loading }, dispatch] = getState();

    if (loading === true) return (
        < View style={styles.container}>
            <ActivityIndicator size='large' />
        </View >
    )

    return null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})