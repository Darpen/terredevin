import React from 'react'
import { Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Degustation from "../screens/Degustation"
import Burger from '../components/Burger'

const { width, height } = Dimensions.get("window")
const DegustationsStack = createStackNavigator()

function setBurger(navigationProps){
    return (
        <Burger 
            navigationProps={navigationProps}
        />
    )
}

export default function DegustationContent(props) {
    return (
        <DegustationsStack.Navigator
        initialRouteName="Dégustation"
        headerMode="float"
        screenOptions={{
            headerTitleAlign: "center",
            headerTintColor:'#5A2A75',
            }}
        >
            
            <DegustationsStack.Screen
            component={Degustation}
            name="Dégustation"
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

            <DegustationsStack.Screen
            component={DegustationContent}
            name="Degustation"
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

        </DegustationsStack.Navigator>
    )
}