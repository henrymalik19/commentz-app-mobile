import React, { useState } from 'react';
import { View } from 'react-native';

import Header from './Header.jsx';
import Signup from './Signup.jsx';
import Signin from './Signin.jsx';

export default function Authenticate() {
    let [view, setView] = useState('signin');

    return (
        <View style={{ flex: 1 }} >
            <Header />
            {view === 'signin' ? <Signin changeView={() => setView('signup')} /> : <Signup changeView={() => setView('signin')} />}
        </ View>
    )

}