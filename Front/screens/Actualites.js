import React from 'react'
import config from '../config'
import { StyleSheet, ScrollView, View, Text, ActivityIndicator } from 'react-native'
import Axios from 'axios'
import { AppLoading } from 'expo'
import FirstPost from '../components/FirstPost'
import Post from '../components/Post'
import Event from '../components/Event'

export default class Actualites extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            articles: [],
            events: [],
            nextEvents: []
        }
    }

    componentDidMount(){
        Axios.get(config.APIlink + '/articles/20')
        .then(response => {
            this.setState({articles:response.data})
            console.log('Articles Loaded')
        })
        .catch(error => console.log(error))

        Axios.get(config.APIlink + '/evenements/')
        .then(response => {
            this.setState({
                events: response.data,
                nextEvents: this.getNextEvents(response.data)
            })
            console.log('Events Loaded')
        })
        .catch(error => console.log(error))
    }

    getNextEvents = (events) => {
        let nextEvents = []
        events.map((event) => {
            if(Date.parse(event.pubDate) > Date.now() && nextEvents.length < 2){
                nextEvents.push(event)
            }
        })
        return nextEvents
    }

    goToArticle = (article) => {
        this.props.navigation.navigate('Article', {article:article})
    }
   
    render(){
        if(this.state.articles[0] !== undefined && this.state.events[0] !== undefined){
            return(
                <ScrollView style={style.container}>
                    <View style={style.slider}>
                        {this.state.nextEvents.map((event, index) => (
                            <Event 
                                key={index}
                                event={event}
                            />
                        ))}
                        <Text style={style.topTitle}>Evénements</Text>
                    </View>
                    {this.state.articles.map((article, index) => (
                        index === 0 ? (
                            <FirstPost 
                                article = {article}
                                key = {index}
                            />
                        ) : (
                            <Post 
                                key = {index}
                                article = {article}
                                onPress = {this.goToArticle}
                            />
                        )
                    ))}
                </ScrollView>
            )
        } else {
            return (
                <View style={style.wait}>
                    <AppLoading />
                    <ActivityIndicator 
                        size='large'
                        color='#5A2A75'
                    />
                </View>
            )
        }
    } 
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
    },
    topTitle:{
        width: '100%',
        fontFamily: 'Sen-Bold',
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingVertical: 6,
        backgroundColor: '#B6A962',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
    },
    text:{
        fontFamily: 'Sen-Regular',
        fontSize: 18,
        color: '#404040'
    },
    slider:{
        flexDirection: 'row',
        position: 'relative',
    },
    wait:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
