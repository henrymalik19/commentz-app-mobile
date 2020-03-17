import React from 'react';

// COMPONENT IMPORTS
import Loader from './views/Loader.jsx';
import AuthStack from './routes/AuthStack.jsx';
import MainDraw from './routes/MainDraw.jsx';

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