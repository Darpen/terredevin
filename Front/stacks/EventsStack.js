import React from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Burger from '../components/Burger'
import Events from '../screens/Events'

const { width, height } = Dimensions.get("window")

const Stack = createStackNavigator()

function setBurger(navigationProps){
    return (
        <Burger 
            navigationProps={navigationProps}
        />
    )
}

export default function EventsStack(props){
    return(
        <View style={{flex:1}}>
            <StatusBar hidden={true}/>
            <Stack.Navigator
            headerMode="float"
            screenOptions={{
                headerTitleAlign: "center",
                headerTintColor:'#5A2A75',
             }}
            >
                <Stack.Screen 
                component={Events}
                name="Evénements"
                options={{
                    headerStyle:{
                        height: height < 550 ? 66 : 88,
                    },
                    headerTitleStyle:{
                        fontFamily: 'Sen-Bold',
                        fontSize: width < 400 ? 20 : 25,
                        color: '#5A2A75'
                    },
                    headerRight: () => setBurger(props.navigation)
                }}
                />
                <Stack.Screen 
                component={Event}
                name="Evenement"
                options={{
                    headerStyle:{
                        height: height < 550 ? 66 : 88,
                    },
                    headerTitleStyle:{
                        fontFamily: 'Sen-Bold',
                        fontSize: width < 400 ? 20 : 25,
                        color: '#5A2A75'
                    },
                    headerRight: () => setBurger(props.navigation)
                }}
                />
            </Stack.Navigator>
        </View>
    )
}