import React from 'react'
import config from '../config'
import { StyleSheet, ScrollView } from 'react-native'
import Axios from 'axios'
import { AppLoading } from 'expo'
import FirstPost from '../components/FirstPost'
import Post from '../components/Post'

export default class Actualites extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            articles: [],
            events: []
        }
    }

    componentDidMount(){
        Axios.get(config.APIlink + '/articles/10')
        .then(response => this.setState({articles:response.data.reverse()}))
        .catch(error => console.log(error))
    }
    
    render(){
        console.log(this.state.events)
        if(this.state.articles !== []){
            return(
                <ScrollView style={style.container}>
                    {this.state.articles.map((article, index) => (
                        index === 0 ? (
                            <FirstPost 
                                key = {index}
                                article = {article}
                            />
                        ) : (
                            <Post 
                                key = {index}
                                article = {article}
                            />
                        )
                    ))}
                </ScrollView>
            )
        } else {
            return <></>
        }
    } 
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF'
    },
    text:{
        fontFamily: 'Sen-Regular',
        fontSize: 18,
        color: '#404040'
    }
})
