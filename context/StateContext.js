import React, { createContext, useState } from 'react';
import { Keyboard } from 'react-native';

const StateContext = createContext();

const StateContextProvider = (props) => {
    let [state, setState] = useState({
        keyboardOpen: false,
        authd: false,
        currentUser: {
            id: 1,
            name: '',
            email: '',
        },
        handleAuth: (authObj) => {
            switch (authObj.type) {
                case 'signin':
                    // SIGN IN LOGIC HERE
                    setState({
                        ...state,
                        authd: true,
                        currentUser: {
                            email: authObj.email
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
                            email: authObj.email
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