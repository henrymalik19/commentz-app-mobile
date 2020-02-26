import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// COMPONENT IMPORTS
import Authenticate from './components/Authenticate/Authenticate.jsx';
import Home from './components/Home/Home.jsx';
import Profile from './components/Profile/Profile.jsx';
// TESTING BELOW ########################
import Chats from './components/Chats/Chats.jsx';
import Rooms from './components/Rooms/Rooms.jsx';
// TESTING ABOVE ########################

// IMPORT CONTEXT
import { StateContextProvider, StateContextConsumer } from './context/StateContext.js';

// CREATE DRAWER NAVIGATION
const Drawer = createDrawerNavigator();

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
          {
            context => (
              context.authd === false ? <Authenticate keyboardOpen={keyBoardOpen} />
                : <NavigationContainer>
                  <Drawer.Navigator
                    drawerType='slide'
                    drawerContentOptions={{
                      activeTintColor: 'white',
                      activeBackgroundColor: 'rgba(144, 238, 144,0.55)',
                      inactiveTintColor: 'lightslategrey',
                      labelStyle: {
                        fontSize: 24,
                        // fontWeight: 'bold'
                      }
                    }}
                  >
                    <Drawer.Screen name="Home" component={Home} />
                    {/* // TESTING BELOW ######################## */}
                    <Drawer.Screen name="Chats" component={Chats} />
                    <Drawer.Screen name="Rooms" component={Rooms} />
                    {/* // TESTING ABOVE ######################## */}
                    <Drawer.Screen name="Profile" component={Profile} />
                  </Drawer.Navigator>
                </NavigationContainer>
            )
          }
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