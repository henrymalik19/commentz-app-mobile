import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';

import { StateContext } from '../../context/StateContext.js';

export default function Signup(props) {

    const context = useContext(StateContext);
    // let [submitBtnDisabled, setSubmitBtnDisabled] = useState(true);
    let [name, setName] = useState();
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [validPass, setValidPass] = useState();

    // let confirmPass = (val) => {
    //     console.log(val);
    //     if (val === password) {
    //         setValidPass(true) 
    //     } else setValidPass(false);
    // }

    // let validateInputs = () => {
    //     console.log(validPass, submitBtnDisabled)
    //     if(name !== undefined && email !== undefined && password !== undefined && validPass === true) {
    //         setSubmitBtnDisabled(false);
    //     } else setSubmitBtnDisabled(true)
    // }

    // let validPassDisplay = () => {
    //     if (validPass === false) return <Text style={styles.passMisMatch}>Password Does Not Match!</Text>
    //     if (validPass === true)  {
    //         setTimeout(() => {
    //             setValidPass();
    //         }, 1000);
    //         return <Text style={styles.passMatch}>Password Matches!</Text>
    //     }
    // }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Name"
                style={styles.inputBox}
                onChangeText={(val) => setName(val)}
                // onChange={validateInputs}
            />
            <TextInput
                placeholder="Email"
                style={styles.inputBox}
                onChangeText={(val) => setEmail(val)}
                // onChange={validateInputs}
            />
            <TextInput
                placeholder="Password"
                style={styles.inputBox}
                onChangeText={(val) => setPassword(val)}
                // onChange={validateInputs}
                secureTextEntry
            />
            {/* {validPassDisplay()} */}
            <TextInput
                placeholder="Confirm Password"
                style={styles.inputBox}
                // onChangeText={confirmPass}
                // onChange={validateInputs}
                secureTextEntry
            />
            <Button
                title={'Sign Up'}
                color='#90EE90'
                style={styles.button}
                // disabled={submitBtnDisabled}
                onPress={() => context.handleAuth({ 
                    type: 'signup',
                    name: name,
                    email: email,
                    password: password
                })}
            />
            <Text style={styles.text}>Have An Account?</Text>
            <Button
                title={'Sign In'}
                color='#90EE90'
                onPress={props.changeView}
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
        marginBottom: 20
    },
    text: {
        marginTop: 60,
        marginBottom: 40,
        textAlign: 'center',
        color: '#aaa'
    },
    passMatch: {
        textAlign: 'center',
        marginBottom: 5,
        fontSize: 10,
        color: 'green'
    },
    passMisMatch: {
        textAlign: 'center',
        marginBottom: 5,
        fontSize: 10,
        color: 'red'
    }
});