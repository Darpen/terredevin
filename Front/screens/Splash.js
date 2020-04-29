import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Splash(){
    return(
        <View>
            <Text>Terre de Vins</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})