import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import faker from 'faker';

import ChatsListItem from './ChatsListItem.jsx';

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

export default function ChatsList({ navigation }) {

    return (<View style={styles.container}>
        <FlatList
            data={generateUserData(20)}
            renderItem={
                ({ item }) => (
                    <ChatsListItem
                        name={item.name}
                        avatar={item.avatar}
                        message={item.message}
                        date={item.date}
                        onPress={() => navigation.navigate('Details')}
                    />
                )
            }
            keyExtractor={item => item.id}
        />
    </View>)
}

const styles = StyleSheet.create({
    container: {}
})