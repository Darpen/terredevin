import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import Favoris from './screens/Favoris';
import Evenements from './screens/Evenements';

/*
 * Construction du menu glissant (menu principal)
 */
const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  render(){
    return (
      <View style={{flex:1}}>
        <StatusBar hidden={true} />
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName = 'Actualités'
          >
            <Drawer.Screen 
              component={Home}
              name='Actualités'
            />
            <Drawer.Screen 
              component={Favoris}
              name='Favoris'
            />
            <Drawer.Screen 
              component={Evenements}
              name='Evénements'
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
