import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// IMPORT COMPONENTS
import Header from './Header.jsx';
import UserList from './UserList.jsx';
import RoomList from './RoomList.jsx';

export default function Home() {
    const [currentTab, setCurrentTab] = useState('user');

    const changeTab = () => {
        // setCurrentTab(e)
        alert('pressed')
    }

    return (
        <View style={styles.container}>
            <Header currentTab={currentTab} changeTab={(val) => setCurrentTab(val)} />
            {currentTab === 'user' ? <UserList /> : <RoomList />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        // marginLeft: -5,
        // marginEnd: -5
    }
})