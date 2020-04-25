import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import Home from './screens/Home';
import Favoris from './screens/Favoris';
import Evenements from './screens/Evenements';

/**
 * Déclaration des custom fonts
 */
let customFonts = {
  'Sen-Bold': require('./assets/fonts/Sen-Bold.ttf'),
  'Sen-Regular': require('./assets/fonts/Sen-Regular.ttf')
}

/*
 * Construction du menu glissant (menu principal)
 */
const Drawer = createDrawerNavigator();

export default class App extends React.Component {

  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts)
    this.setState({ fontsLoaded: true })
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render(){
    if (this.state.fontsLoaded) {
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
      )
    } else {
      return <AppLoading />
    }
  }
}
