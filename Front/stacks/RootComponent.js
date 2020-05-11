// IMPORT REACT
import React from 'react'

// IMPORT REACT NAVIGATION
import { createDrawerNavigator } from '@react-navigation/drawer'

// IMPORT DES COMPOSANTS
import Home from './Home';
import FavoritesStack from './FavoritesStack';
import Evenements from '../screens/Evenements';

const Drawer = createDrawerNavigator()

export default function RootComponent(){
    return(
        <Drawer.Navigator
        initialRouteName = 'Actualités'
        drawerPosition = 'right'
        hideStatusBar = {true}
        statusBarAnimation='none'
        >
            <Drawer.Screen 
            component={Home}
            name='Actualités'
            />

            <Drawer.Screen 
            component={FavoritesStack}
            name='Favoris'
            />

            <Drawer.Screen 
            component={Evenements}
            name='Evénements'
            />
        </Drawer.Navigator>
    )
}