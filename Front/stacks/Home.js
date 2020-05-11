import React from 'react'
import { View, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Article from '../screens/Article'
import Evenement from '../screens/Evenement'
import Burger from '../components/Burger'
import Actuality from '../screens/Actuality'


function setBurger(navigationProps){
    return (
        <Burger 
            navigationProps={navigationProps}
        />
    )
}

const Stack = createStackNavigator();

export default function Home(props){
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
                component={Actuality}
                name="Actualités"
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
                <Stack.Screen 
                component={Article}
                name="Article"
                options={{
                    headerStyle:{
                        height: 88,
                    },
                    headerTitleStyle:{
                        fontFamily: 'Sen-Bold',
                        fontSize: 25,
                        color: '#5A2A75'
                    },
                    headerRight: () => setBurger(props.navigation)
                }}
                />
                <Stack.Screen 
                component={Evenement}
                name="Evenement"
                options={{
                    headerStyle:{
                        height: 88,
                    },
                    headerTitleStyle:{
                        fontFamily: 'Sen-Bold',
                        fontSize: 25,
                        color: '#5A2A75'
                    },
                    headerRight: () => setBurger(props.navigation)
                }}
                />
            </Stack.Navigator>
        </View>
    )
}