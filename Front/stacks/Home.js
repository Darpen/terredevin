import React from 'react'
import { View, StatusBar, Dimensions, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import PostDetails from '../screens/PostDetails'
import EventDetails from '../screens/EventDetails'
import Burger from '../components/Burger'
import Actuality from '../screens/Actuality'


function setBurger(navigationProps){
    return (
        <Burger 
            navigationProps={navigationProps}
        />
    )
}

function LogoTitle() {
    return (
        <Image
            source={require('../images/logo.png')}
            style={{width: 160, height: 40}}
        />
    )
}

const { width, height } = Dimensions.get("window")

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
                        height: height < 550 ? 66 : 88,
                    },
                    headerTitleStyle:{
                        fontFamily: 'Sen-Bold',
                        fontSize: width < 400 ? 20 : 25,
                        color: '#5A2A75'
                    },
                    headerTitle: props => <LogoTitle {...props}/>,
                    headerRight: () => setBurger(props.navigation)
                }}
                />
                <Stack.Screen 
                component={PostDetails}
                name="Article"
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
                component={EventDetails}
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