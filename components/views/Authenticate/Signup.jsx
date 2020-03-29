import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import validator from 'validator';
import Header from './Header.jsx';
import { getState } from '../../../context/StateContext.js';



export default function Signup(props) {

    // GET GLOBAL STATE
    const [state, dispatch] = getState();

    // SET LOCAL STATE
    let [focus, setFocus] = useState('');
    let [servErr, setServErr] = useState('');

    let [fname, setFName] = useState({
        value: '',
        valid: '',
        error: ''
    });
    let [lname, setLName] = useState({
        value: '',
        valid: '',
        error: ''
    });
    let [handle, setHandle] = useState({
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

    // ENABLE AND DISABLE SUBMIT BUTTON
    let submitBtnDisabled = (fname.valid && lname.valid && handle.valid && email.valid && pass.valid && pass.confirmed) ? false : true;

    const handleSubmit = async () => {

        dispatch({ type: 'AUTH_SIGNUP_ATTEMPT' });

        try {
            let res = await fetch('http://10.0.10.58:4000/api/v1/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fname: fname.value.trim(),
                    lname: lname.value.trim(),
                    handle: handle.value.trim(),
                    email: email.value.trim(),
                    password: pass.value.trim(),
                }),
            });

            res = await res.json();
            if (res.error) throw new Error(res.error);
            dispatch({ type: 'AUTH_SIGNUP_SUCCESS', payload: res });
        } catch (err) {
            setServErr(err.message)
            dispatch({ type: 'AUTH_SIGNUP_ERROR', payload: err });
        }
    }

    const validateInput = ({ type, value }) => {
        switch (type) {
            case 'fname':
                if (validator.isLength(value, { min: 3, max: 50 }) === false && value !== '') setFName({
                    value: value,
                    valid: false,
                    error: 'invalid First Name value'
                })
                else if (value === '') setFName({
                    value: value,
                    valid: false,
                    error: ''
                })
                else setFName({
                    value: value,
                    valid: true,
                    error: ''
                })
                break;
            case 'lname':
                if (validator.isLength(value, { min: 3, max: 50 }) === false && value !== '') setLName({
                    value: value,
                    valid: false,
                    error: 'invalid Last Name value'
                })
                else if (value === '') setLName({
                    value: value,
                    valid: false,
                    error: ''
                })
                else setLName({
                    value: value,
                    valid: true,
                    error: ''
                })
                break;
            case 'handle':
                if (validator.isLength(value, { min: 3, max: 50 }) === false && value !== '') setHandle({
                    value: value,
                    valid: false,
                    error: 'invalid Handle'
                })
                else if (value === '') setHandle({
                    value: value,
                    valid: false,
                    error: ''
                })
                else setHandle({
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
            case 'fname':
                if (!validator.isEmpty(fname.error) && focus === 'fname') return <Text style={styles.error}>{fname.error}</Text>
                break;
            case 'lname':
                if (!validator.isEmpty(lname.error) && focus === 'lname') return <Text style={styles.error}>{lname.error}</Text>
                break;
            case 'handle':
                if (!validator.isEmpty(handle.error) && focus === 'handle') return <Text style={styles.error}>{handle.error}</Text>
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
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, marginRight: 2.5 }}>
                    {errorMsg('fname')}
                    <TextInput
                        placeholder="First Name"
                        style={
                            fname.valid === true ? styles.inputBoxValid
                                : fname.valid === false ? styles.inputBoxInvalid
                                    : styles.inputBox}
                        onFocus={() => setFocus('fname')}
                        onChangeText={(val) => validateInput({ type: 'fname', value: val })}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: 2.5 }}>
                    {errorMsg('lname')}
                    <TextInput
                        placeholder="Last Name"
                        style={
                            lname.valid === true ? styles.inputBoxValid
                                : lname.valid === false ? styles.inputBoxInvalid
                                    : styles.inputBox}
                        onFocus={() => setFocus('lname')}
                        onChangeText={(val) => validateInput({ type: 'lname', value: val })}
                    />
                </View>
            </View>
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
            {errorMsg('handle')}
            <TextInput
                placeholder="Handle"
                style={
                    handle.valid === true ? styles.inputBoxValid
                        : handle.valid === false ? styles.inputBoxInvalid
                            : styles.inputBox}
                onFocus={() => setFocus('handle')}
                onChangeText={(val) => validateInput({ type: 'handle', value: val })}
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
                onPress={handleSubmit}
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