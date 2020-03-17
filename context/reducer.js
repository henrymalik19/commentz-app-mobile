//USED TO GENERATE FAKE DATA
import { generateChat } from '../utils/fakeData.js';
//USED TO GENERATE FAKE DATA

export default function reducer(state, action) {
    switch (action.type) {
        case 'AUTH_SIGNIN_ATTEMPT':
            return {
                ...state,
                loading: true,
                error: ''
            }
        case 'AUTH_SIGNIN_SUCCESS':
            return {
                ...state,
                loading: false,
                error: '',
                socket: new WebSocket('ws://10.0.10.58:6000'),
                authed: action.payload.authenticated,
                chats: generateChat(5, 10, action.payload.user._id),
                currentUser: {
                    id: action.payload.user._id,
                    fname: action.payload.user.fname,
                    lname: action.payload.user.lname,
                    handle: action.payload.user.handle,
                    email: action.payload.user.email,
                    avatar: action.payload.user.avatar,
                    contacts: action.payload.user.contacts
                }
            }
        case 'AUTH_SIGNIN_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'AUTH_SIGNUP_ATTEMPT':
            return {
                ...state,
                loading: true,
                error: ''
            }
        case 'AUTH_SIGNUP_SUCCESS':
            return {
                ...state,
                loading: false,
                error: '',
                socket: new WebSocket('ws://10.0.10.58:6000'),
                authed: action.payload.authenticated,
                chats: generateChat(5, 10, action.payload.user._id),
                currentUser: {
                    id: action.payload.user._id,
                    fname: action.payload.user.fname,
                    lname: action.payload.user.lname,
                    handle: action.payload.user.handle,
                    email: action.payload.user.email,
                    avatar: action.payload.user.avatar
                }
            }
        case 'AUTH_SIGNUP_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'AUTH_SIGNOUT_ATTEMPT':
            return {
                ...state,
                loading: true,
                error: ''
            }
        case 'AUTH_SIGNOUT_SUCCESS':
            return {
                ...state,
                loading: false,
                error: '',
                socket: '',
                authed: false,
                chats: '',
                currentUser: {}
            }
        case 'AUTH_SIGNOUT_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'USER_UPDATE':
            console.log(action.payload);
            return {
                ...state,
                refresh: !state.refresh,
                currentUser: {
                    id: action.payload._id,
                    fname: action.payload.fname,
                    lname: action.payload.lname,
                    handle: action.payload.handle,
                    email: action.payload.email,
                    avatar: action.payload.avatar,
                    contacts: action.payload.contacts
                }
            }
        case 'CHAT_NEW_CHAT':
            return {
                ...state,
                chats: [
                    action.payload,
                    ...state.chats
                ]
            }
        case 'CHAT_SEND_MSG_ATTEMPT':
            state.chats.find(chat => chat.id === action.payload.chatId).messages.unshift(action.payload)
            return {
                ...state,
                refresh: !state.refresh
            }
        case 'CHAT_SEND_MSG_SUCCESS':
            state.chats.find(chat => chat.id === action.payload.chatId).messages.find(msg => msg.id === action.payload.id).recvd = action.payload.recvd;
            return {
                ...state,
                refresh: !state.refresh
            }
        case 'CHAT_RECV_MSG':
            state.chats.find(chat => chat.id === action.payload.chatId).messages.unshift(action.payload)
            return {
                ...state,
                refresh: !state.refresh
            }
        default:
            return state
    }
}