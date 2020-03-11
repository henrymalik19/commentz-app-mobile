import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import validator from 'validator';
import Header from './Header.jsx';
import { StateContext } from '../../context/StateContext.js';

//USED TO GENERATE FAKE DATA
import { generateChat, getAvatar, getName } from '../../utils/fakeData.js';
//USED TO GENERATE FAKE DATA

export default function Signup(props) {

    const [state, setState] = useContext(StateContext);

    let [focus, setFocus] = useState('');
    let [servErr, setServErr] = useState('');
    let [name, setName] = useState({
        value: '',
        valid: '',
        error: ''
    });
    let [email, setEmail] = useState({
        value: '',
        valid: '',
        error: ''
    });
    let [pass, setPass] = useState({
        value: '',
        valid: '',
        error: '',
        confirmed: ''
    });

    let submitBtnDisabled = (name.valid && email.valid && pass.valid && pass.confirmed) ? false : true;

    const handleAuth = async () => {

        try {
            let res = await fetch('http://10.0.10.58:4000/api/v1/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name.value.trim(),
                    email: email.value.trim(),
                    password: pass.value.trim(),
                }),
            });
            res = await res.json();
            console.log(res);
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
            setServErr(err.message)
        }
    }

    const validateInput = ({ type, value }) => {
        switch (type) {
            case 'name':
                if (validator.isLength(value, { min: 5, max: 50 }) === false && value !== '') setName({
                    value: value,
                    valid: false,
                    error: 'invalid Name value'
                })
                else if (value === '') setName({
                    value: value,
                    valid: false,
                    error: ''
                })
                else setName({
                    value: value,
                    valid: true,
                    error: ''
                })
                break;
            case 'email':
                if (validator.isEmail(value) === false && value !== '') setEmail({
                    value: value,
                    valid: false,
                    error: 'invalid Email value'
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
                    error: 'invalid Password value',
                    confirmed: false
                })
                else if (value === '') setPass({
                    value: value,
                    valid: false,
                    error: '',
                    confirmed: false
                })
                else setPass({
                    value: value,
                    valid: true,
                    error: '',
                    confirmed: false
                })
                break;
            case 'cpass':
                if (validator.equals(value, pass.value)) setPass({
                    ...pass,
                    confirmed: true
                })
                else if (value === '') setPass({
                    ...pass,
                    confirmed: ''
                })
                else setPass({
                    ...pass,
                    confirmed: false
                })
                break;
        }
    }

    let errorMsg = (type) => {
        switch (type) {
            case 'server':
                if (!validator.isEmpty(servErr)) return <Text style={styles.error}>{servErr}</Text>
                break;
            case 'name':
                if (!validator.isEmpty(name.error) && focus === 'name') return <Text style={styles.error}>{name.error}</Text>
                break;
            case 'email':
                if (!validator.isEmpty(email.error) && focus === 'email') return <Text style={styles.error}>{email.error}</Text>
                break;
            case 'pass':
                if (!validator.isEmpty(pass.error) && focus === 'pass') return <Text style={styles.error}>{pass.error}</Text>
                break;
            case 'cpass':
                if (pass.confirmed === false && focus === 'cpass') return <Text style={styles.error}>Passwords Do Not Match</Text>
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Header />
            {errorMsg('server')}
            {errorMsg('name')}
            <TextInput
                placeholder="Name"
                style={
                    name.valid === true ? styles.inputBoxValid
                        : name.valid === false ? styles.inputBoxInvalid
                            : styles.inputBox}
                onFocus={() => setFocus('name')}
                onChangeText={(val) => validateInput({ type: 'name', value: val })}
            />
            {errorMsg('email')}
            <TextInput
                placeholder="Email"
                style={
                    email.valid === true ? styles.inputBoxValid
                        : email.valid === false ? styles.inputBoxInvalid
                            : styles.inputBox}
                onFocus={() => setFocus('email')}
                onChangeText={(val) => validateInput({ type: 'email', value: val })}
            />
            {errorMsg('pass')}
            <TextInput
                placeholder="Password"
                style={
                    pass.valid === true ? styles.inputBoxValid
                        : pass.valid === false ? styles.inputBoxInvalid
                            : styles.inputBox}
                onFocus={() => setFocus('pass')}
                onChangeText={(val) => validateInput({ type: 'pass', value: val })}
                secureTextEntry
            />
            {errorMsg('cpass')}
            <TextInput
                placeholder="Confirm Password"
                style={
                    pass.confirmed === true ? styles.inputBoxValid
                        : pass.confirmed === false ? styles.inputBoxInvalid
                            : styles.inputBox}
                onFocus={() => setFocus('cpass')}
                onChangeText={(val) => validateInput({ type: 'cpass', value: val })}
                secureTextEntry
            />
            <Button
                title={'Sign Up'}
                color='#90EE90'
                style={styles.button}
                disabled={submitBtnDisabled}
                onPress={handleAuth}
            />
            <Text style={styles.text}>Have An Account?</Text>
            <Button
                title={'Sign In'}
                color='#90EE90'
                onPress={() => props.navigation.navigate('signin')}
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
        marginBottom: 80
    },
    inputBox: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 15,
    },
    inputBoxValid: {
        height: 50,
        borderWidth: 1,
        borderColor: 'lightgreen',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 15,
    },
    inputBoxInvalid: {
        height: 50,
        borderWidth: 1,
        borderColor: 'red',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 15,
    },
    text: {
        marginTop: 60,
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