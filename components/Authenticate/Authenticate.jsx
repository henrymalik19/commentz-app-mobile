import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView } from 'react-native';

import Header from './Header.jsx';
import Signup from './Signup.jsx';
import Signin from './Signin.jsx';

export default function Authenticate({keyboardOpen}) {
    
    let [view, setView] = useState('signin');    

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' keyboardVerticalOffset='-200' >
            <Header keyboardOpen={keyboardOpen}/>
            {view === 'signin' ? <Signin changeView={() => setView('signup')} /> : <Signup changeView={() => setView('signin')} />}
        </ KeyboardAvoidingView>
    )

}