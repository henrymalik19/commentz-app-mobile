import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';

// COMPONENT IMPORTS
// import Authenticate from './views/Authenticate/Authenticate.jsx';
import AuthStack from './routes/AuthStack.jsx';
import MainDraw from './routes/MainDraw.jsx';

// IMPORT CONTEXT
import { StateContextProvider, StateContextConsumer } from './context/StateContext.js';

export default function App() {

  return (
    <StateContextProvider>
      <View style={styles.container}>
        <StateContextConsumer>
          {context => (context.authd === false ? <AuthStack /> : <MainDraw />)}
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