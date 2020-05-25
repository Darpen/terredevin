import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function Splash(props){
    return(
        <View style={style.container}>
            {props.getData()}
            <Image 
                source={require('../images/logo.png')}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF"
    }
})