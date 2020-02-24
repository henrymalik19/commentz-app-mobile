import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// IMPORT COMPONENTS
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import UserChatList from './UserChatList.jsx';
import RoomChatList from './RoomChatList.jsx';

export default function Home() {
    const [currentTab, setCurrentTab] = useState('user');

    return (
        <View style={styles.container}>
            <Header />
            {currentTab === 'user' ? <UserChatList /> : <RoomChatList />}
            <Footer currentTab={currentTab} changeTab={(val) => setCurrentTab(val)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    }
})