import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Actualites from './Actualites';

/*
 * Construction de la navigation
 */
const Stack = createStackNavigator();

export default function Home(){
    return(
        <View style={{flex:1}}>
            <StatusBar hidden={true} />
            <Stack.Navigator
                headerMode="float"
                screenOptions={{
                    headerTitleAlign: "center",
                }}
            >
                <Stack.Screen 
                    component={Actualites}
                    name="Actualités"
                />
            </Stack.Navigator>
        </View>
    )
}