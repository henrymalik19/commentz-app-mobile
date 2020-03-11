import React from 'react';
import { StyleSheet, View } from 'react-native';

// COMPONENT IMPORTS
import AuthStack from './routes/AuthStack.jsx';
import MainDraw from './routes/MainDraw.jsx';

// IMPORT CONTEXT
import { StateContextProvider, StateContextConsumer } from './context/StateContext.js';

export default function App() {

  return (
    <StateContextProvider>
      <View style={styles.container}>
        <StateContextConsumer>
          {([state, setState]) => (state.authd === false ? <AuthStack /> : <MainDraw />)}
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