import React, { createContext, useState } from 'react';

const StateContext = createContext();

const StateContextProvider = (props) => {
    const [state, setState] = useState({
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

    return (
        <StateContext.Provider value={[state, setState]}>
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