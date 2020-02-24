import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';

// COMPONENT IMPORTS
import Authenticate from './components/Authenticate/Authenticate.jsx';
import Home from './components/Home/Home.jsx';

// IMPORT CONTEXT
import { StateContextProvider, StateContextConsumer } from './context/StateContext.js';

export default function App() {


  return (
    <StateContextProvider>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset='-200' style={styles.container}>
        <StateContextConsumer>
          {
            context => (
              context.authd === false ? <Authenticate /> : <Home />
            )
          }
        </StateContextConsumer>
      </KeyboardAvoidingView>
    </StateContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});