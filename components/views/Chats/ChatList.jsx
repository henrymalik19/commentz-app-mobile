import React from 'react';
import { FlatList } from 'react-native';
import { getState } from '../../../context/StateContext.js';

import ChatItem from './ChatItem.jsx';

export default function ChatList({ navigation }) {

    const [{ currentUser, chats, refresh }, dispatch] = getState();

    const calcDay = (msgObj) => {

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        let date = msgObj.sender.id === currentUser.id ? msgObj.sendDate : msgObj.recvDate;

        if (`${new Date().getMonth()}${new Date().getDate()}` === `${date.getMonth()}${date.getDate()}`) {
            let hours = date.getHours();
            let minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
            return hours >= 12 ? `${hours - 12}:${minutes} PM`
                : hours === 0 ? `${12}:${minutes} AM` : `${hours}:${minutes} AM`
        }
        return `${months[date.getMonth()]}. ${date.getDate()}`

    }

    return (
        <FlatList
            style={{ backgroundColor: '#fff' }}
            data={chats}
            extraData={refresh}
            renderItem={
                ({ item }) => (
                    <ChatItem
                        name={item.recipient.name}
                        avatar={item.recipient.avatar}
                        message={item.messages.length > 0 ? item.messages[0].text : ''}
                        date={item.messages.length > 0 ? calcDay(item.messages[0]) : ''} // Get the Latest Message Time if Today or Day
                        unread={item.messages.filter(message => message.read === false).length}
                        onPress={() => navigation.navigate('ChatDetail', {
                            name: item.recipient.name,
                            chatId: item.id
                        })}
                    />
                )
            }
            keyExtractor={item => item.id}
        />
    )
}