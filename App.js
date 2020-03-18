import React from 'react';

// COMPONENT IMPORTS
import Loader from './components/Loader.jsx';
import AuthStack from './components/navigations/AuthStack.jsx';
import MainDraw from './components/navigations/MainDraw.jsx';

// IMPORT CONTEXT
import { StateProvider } from './context/StateContext.js';

export default function App() {

  return (
    <StateProvider>
      <Loader />
      <AuthStack />
      <MainDraw />
    </StateProvider>
  );
}