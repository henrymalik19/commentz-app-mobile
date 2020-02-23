import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';

// COMPONENT IMPORTS
import Authenticate from './components/Authenticate/Authenticate.jsx';
import Chat from './components/Chat/Chat.jsx';

// IMPORT CONTEXT
import { StateContextProvider, StateContextConsumer } from './StateContext'

export default function App() {


  return (
    <StateContextProvider>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset='-200' style={styles.container}>
        <StateContextConsumer>
          {
            context => (
              context.authd === false ? <Authenticate /> : <Chat />
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