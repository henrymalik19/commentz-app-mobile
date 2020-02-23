import React, { useState, useEffect } from 'react';
import { Keyboard, StyleSheet, KeyboardAvoidingView } from 'react-native';

// COMPONENT IMPORTS
import Authenticate from './components/Authenticate/Authenticate.jsx';
import Home from './components/Home/Home.jsx';

// IMPORT CONTEXT
import StateContext from './Context'

export default function App() {

  let [state, setState] = useState({
    keyboardOpen: false,
    authd: false
  });

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setState({
        ...state,
        keyboardOpen: true
      })
    });

    Keyboard.addListener('keyboardDidHide', () => {
      setState({
        ...state,
        keyboardOpen: false
      })
    })

    return (() => {
      Keyboard.removeAllListeners('keyBoardDidShow');
      Keyboard.removeAllListeners('keyBoardDidHide');
    })

  }, []);

  return (
    <StateContext.Provider value={state}>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset='-200' style={styles.container}>
        {state.authd === false ? <Authenticate /> : <Home />}
      </KeyboardAvoidingView>
    </StateContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});