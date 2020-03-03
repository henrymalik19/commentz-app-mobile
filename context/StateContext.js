import React, { createContext, useState } from 'react';
import { Keyboard } from 'react-native';

import { getAvatar, getName } from '../utils/fakeData.js';

const StateContext = createContext();

const StateContextProvider = (props) => {
    let [state, setState] = useState({
        socket: '',
        keyboardOpen: false,
        authd: false,
        currentUser: {
            id: 1,
            name: '',
            email: '',
            avatar: ''
        },
        handleAuth: (authObj) => {
            switch (authObj.type) {
                case 'signin':
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
                case 'signup':
                    // SIGN IN LOGIC HERE
                    setState({
                        ...state,
                        authd: true,
                        currentUser: {
                            name: authObj.name,
                            email: authObj.email,
                            avatar: getAvatar()
                        }
                    });
                    break;
                case 'signout':
                    setState({
                        ...state,
                        authd: false
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