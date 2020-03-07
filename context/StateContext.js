import React, { createContext, useState } from 'react';
import { generateUserData } from '../utils/fakeData.js';

import { getAvatar, getName } from '../utils/fakeData.js';

const StateContext = createContext();

const StateContextProvider = (props) => {
    let [state, setState] = useState({
        socket: '',
        authd: false,
        chats: generateUserData(20),
        currentUser: {
            id: 0,
            name: '',
            email: '',
            avatar: ''
        },
        handleAuth: (authObj) => {
            switch (authObj.type) {
                case 'signin' || 'signup':
                    // SIGN IN LOGIC HERE
                    setState({
                        ...state,
                        socket: new WebSocket('ws://10.0.10.58:6000'),
                        authd: true,
                        currentUser: {
                            name: authObj.name || getName(),
                            email: authObj.email,
                            avatar: getAvatar()
                        }
                    });
                    break;
                case 'signout':
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
                    break;
            }
        }
    });

    return (
        <StateContext.Provider value={state}>
            {props.children}
        </StateContext.Provider>
    )
}

const StateContextConsumer = (props) => {
    return (
        <StateContext.Consumer>
            {props.children}
        </StateContext.Consumer>
    )
}

export { StateContext, StateContextProvider, StateContextConsumer };