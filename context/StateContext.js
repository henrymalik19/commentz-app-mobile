import React, { createContext, useReducer, useContext, useEffect } from 'react';
import reducer from './reducer.js';

// CREATE STATE CONTEXT
const StateContext = createContext();

// INITIAL STATE
const initialState = {
    loading: false,
    refresh: true,
    error: '',
    socket: '',
    authed: false,
    chats: '',
    currentUser: {}
}

// CREATE CONTEXT PROVIDER
const StateProvider = (props) => {
    // CREATE REDUCER HOOK
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.socket !== '') {

            state.socket.onopen = () => {
                console.log('Socket Open');
                state.socket.send(JSON.stringify({ type: 'OPEN_CONN_REQ', id: state.currentUser.id }));
            }

            state.socket.onmessage = (res) => {
                let data = JSON.parse(res.data);
                switch (data.type) {
                    case 'OPEN_CONN_RES':
                        console.log(`Connection Open Status: ${data.status}`);
                        break;
                    case 'CLOSE_CONN_RES':
                        console.log(`Connection Close Status: ${data.status}`);
                        state.socket.close();
                        dispatch({ type: 'AUTH_SIGNOUT_SUCCESS' })
                        break;
                    case 'SEND_MESSAGE_RES':
                        // CONFIRM THAT MESSAGE WAS SENT AND RECVD
                        dispatch({ type: 'CHAT_SEND_MSG_SUCCESS', payload: data.message });
                        break;
                    case 'RECV_MESSAGE_REQ':
                        // HANDLE NEW INCOMING MESSAGES
                        dispatch({ type: 'CHAT_RECV_MSG', payload: data.message });
                        break;
                    default:
                        break;
                }
            }
        }
    }, [state.socket])

    return (
        <StateContext.Provider value={[state, dispatch]}>
            {props.children}
        </StateContext.Provider>
    )
}

const getState = () => useContext(StateContext);

export { StateProvider, getState };