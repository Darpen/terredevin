import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Burger from '../components/Burger'
import Favorites from '../screens/Favorites'

const Stack = createStackNavigator();

function setBurger(navigationProps){
    return (
        <Burger 
            navigationProps={navigationProps}
        />
    )
}

export default function StackFavoris(props){
    return(
        <View style={{flex:1}}>
            <StatusBar hidden={true} />
            <Stack.Navigator
                headerMode="float"
                screenOptions={{
                    headerTitleAlign: "center",
                    headerTintColor:'#5A2A75',
                }}
            >
                <Stack.Screen 
                    name="Favoris"
                    component={Favorites}
                    options={{
                        headerStyle:{
                            height: 88,
                        },
                        headerTitleStyle:{
                            fontFamily: 'Sen-Bold',
                            fontSize:25,
                            color: '#5A2A75'
                        },
                        headerRight: () => setBurger(props.navigation)
                    }}
                />
            </Stack.Navigator>
        </View>
    )
}