import React, { useState, useContext } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import validator from 'validator';
import Header from './Header.jsx';
import { StateContext } from '../../context/StateContext.js';

//USED TO GENERATE FAKE DATA
import { generateChat, getAvatar, getName } from '../../utils/fakeData.js';
//USED TO GENERATE FAKE DATA

export default function Signin(props) {

    const [state, setState] = useContext(StateContext);
    let [focus, setFocus] = useState('');
    let [servErr, setServErr] = useState('');
    let [email, setEmail] = useState({
        value: '',
        valid: '',
        error: ''
    });
    let [pass, setPass] = useState({
        value: '',
        valid: '',
        error: ''
    });

    let submitBtnDisabled = (email.valid && pass.valid) ? false : true;

    const handleAuth = async () => {

        try {
            let res = await fetch('http://10.0.10.58:4000/api/v1/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email.value,
                    password: pass.value,
                }),
            });
            res = await res.json();
            if (res.error) throw new Error(res.error);
            setState({
                ...state,
                socket: new WebSocket('ws://10.0.10.58:6000'),
                authd: true,
                chats: generateChat(5, res.user._id),
                currentUser: {
                    id: res.user._id,
                    name: res.user.name,
                    email: res.user.email,
                    avatar: res.user.avatar
                }
            });
        } catch (err) {
            setServErr(err.message);
        }
    }

    const validateInput = ({ type, value }) => {
        switch (type) {
            case 'email':
                if (validator.isEmail(value) === false && value !== '') setEmail({
                    value: value,
                    valid: false,
                    error: 'invalid Email'
                })
                else if (value === '') setEmail({
                    value: value,
                    valid: false,
                    error: ''
                })
                else setEmail({
                    value: value,
                    valid: true,
                    error: ''
                })
                break;
            case 'pass':
                if (validator.isLength(value, { min: 5, max: 50 }) === false && value !== '') setPass({
                    value: value,
                    valid: false,
                    error: 'invalid Password'
                })
                else if (value === '') setPass({
                    value: value,
                    valid: false,
                    error: ''
                })
                else setPass({
                    value: value,
                    valid: true,
                    error: ''
                })
                break;
        }
    };

    let errorMsg = (type) => {
        switch (type) {
            case 'server':
                if (!validator.isEmpty(servErr)) return <Text style={styles.error}>{servErr}</Text>
                break;
            case 'email':
                if (!validator.isEmpty(email.error) && focus === 'email') return <Text style={styles.error}>{email.error}</Text>
                break;
            case 'pass':
                if (!validator.isEmpty(pass.error) && focus === 'pass') return <Text style={styles.error}>{pass.error}</Text>
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Header />
            {errorMsg('server')}
            {errorMsg('email')}
            <TextInput
                placeholder="Email"
                style={
                    email.valid === true ? styles.inputBoxValid
                        : email.valid === false ? styles.inputBoxInvalid
                            : styles.inputBox}
                onFocus={() => setFocus('email')}
                onChangeText={(val) => validateInput({ type: 'email', value: val.trim() })}
            />
            {errorMsg('pass')}
            <TextInput
                placeholder="Password"
                style={
                    pass.valid === true ? styles.inputBoxValid
                        : pass.valid === false ? styles.inputBoxInvalid
                            : styles.inputBox}
                onFocus={() => setFocus('pass')}
                onChangeText={(val) => validateInput({ type: 'pass', value: val.trim() })}
                secureTextEntry
            />
            <Button
                title={'Sign In'}
                color='#90EE90'
                disabled={submitBtnDisabled}
                onPress={handleAuth}
            />
            <Text style={styles.text}>Don't Have An Account?</Text>
            <Button
                title={'Sign Up'}
                color='#90EE90'
                onPress={() => props.navigation.navigate('signup')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2.25,
        justifyContent: 'flex-end',
        paddingLeft: 50,
        paddingRight: 50,
        marginBottom: 80,
    },
    inputBox: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 40,
    },
    inputBoxValid: {
        height: 50,
        borderWidth: 1,
        borderColor: 'lightgreen',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 40
    },
    inputBoxInvalid: {
        height: 50,
        borderWidth: 1,
        borderColor: 'red',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 40
    },
    text: {
        marginTop: 120,
        marginBottom: 40,
        textAlign: 'center',
        color: '#aaa'
    },
    error: {
        textAlign: 'center',
        marginBottom: 5,
        fontSize: 12,
        color: 'red'
    }
});