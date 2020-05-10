import React from 'react'
import { View, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Actualites from '../screens/Actualites'
import Article from '../screens/Article'
import Evenement from '../screens/Evenement'
import Burger from '../components/Burger'

// function logoTitle(){
//     return(
//         <Image 
//             source={require('')}
//         />
//     )
// }

function setBurger(navigationProps){
    return (
        <Burger 
            navigationProps={navigationProps}
        />
    )
}

/*
 * Construction de la navigation
 */
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
                    component={Actualites}
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