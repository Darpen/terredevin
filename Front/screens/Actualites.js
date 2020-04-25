import React from 'react'
import config from '../config'
import { StyleSheet, View, Text } from 'react-native'
import Axios from 'axios'

export default class Actualites extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount(){
        Axios.get(config.APIlink + '/articles/5')
        .then(response => this.setState({articles:response.data}))
        .catch(error => console.log(error))
    }
    
    render(){
        return(
            <View>
                <Text style={style.text}>Page Actualités</Text>
            </View>
        )
    } 
}

const style = StyleSheet.create({
    text:{
        fontFamily: 'Sen-Bold',
        fontSize: 25
    }
})
