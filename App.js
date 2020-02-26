import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';

// COMPONENT IMPORTS
import Authenticate from './views/Authenticate/Authenticate.jsx';
import MainDraw from './routes/MainDraw.jsx';

// IMPORT CONTEXT
import { StateContextProvider, StateContextConsumer } from './context/StateContext.js';

export default function App() {

  let [keyBoardOpen, setKeyBoardOpen] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyBoardOpen(true)
    });

    Keyboard.addListener('keyboardDidHide', () => {
      setKeyBoardOpen(false)
    })

    return (() => {
      Keyboard.removeAllListeners('keyBoardDidShow');
      Keyboard.removeAllListeners('keyBoardDidHide');
    })

  }, []);

  return (
    <StateContextProvider>
      <View style={styles.container}>
        <StateContextConsumer>
          {context => (context.authd === false ? <Authenticate keyboardOpen={keyBoardOpen} /> : <MainDraw />)}
        </StateContextConsumer>
      </View>
    </StateContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});