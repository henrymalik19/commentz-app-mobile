import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import faker from 'faker';

import UserChatListItem from './UserChatListItem.jsx';

const generateUserData = (num) => {

    let data = []

    for (let i = 0; i < num; i++) {
        data.push({
            id: i.toString(),
            name: faker.name.findName(),
            avatar: faker.image.avatar(),
            message: faker.lorem.paragraph(),
            date: faker.date.weekday()
        });
    }
    return data;
}

export default function UserChatList() {
    return (
        <View style={styles.container}>
            <FlatList
                data={generateUserData(20)}
                renderItem={
                    ({ item }) => (
                        <UserChatListItem
                            name={item.name}
                            avatar={item.avatar}
                            message={item.message}
                            date={item.date}
                        />
                    )
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginEnd: 10,
    }
});