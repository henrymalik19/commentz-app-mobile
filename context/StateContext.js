import React, { createContext, useState } from 'react';
import { Keyboard } from 'react-native';

const StateContext = createContext();

const StateContextProvider = (props) => {
    let [state, setState] = useState({
        keyboardOpen: false,
        authd: false,
        handleAuth: (authObj) => {
            switch (authObj.type) {
                case 'signin':
                    // SIGN IN LOGIC HERE
                    break;
                case 'signup':
                    // SIGN IN LOGIC HERE
                    console.log(authObj);
                    break;
            }
            setState({
                ...state,
                authd: true
            });
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