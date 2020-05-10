import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import {connect} from 'react-redux'

import Axios from 'axios'
import Splash from './Splash'
import FirstPost from '../components/FirstPost'
import Post from '../components/Post'
import Event from '../components/Event'

const URL = "http://8d86ded8.ngrok.io"

const mapStateToProps = (state) => { 
    return { 
        posts: state.contentReducer.posts,
        events: state.contentReducer.events
    }}

class Actualites extends React.Component{

    // componentDidMount(){
    //     // Récupération des articles
    //     try{
    //         Axios.get(URL + '/articles/20')
    //         .then(response=>this.updatePosts(response.data))
    //         .catch(error=>console.log(error))
    //     } catch {
    //         console.log("fail posts")
    //     }

    //     // Récupération des événements
    //     try{
    //         Axios.get(URL + '/evenements')
    //         .then(response => this.updateEvents(response.data))
    //         .catch(error=>console.log(error))
    //     } catch {
    //         console.log("fail events")
    //     }
    // }

    updatePosts = (response) => {
        const action = {
            type: "UPDATE_CONTENT",
            value: {
                posts: response
            }
        }
        this.props.dispatch(action)
    }

    updateEvents = (response) => {
        const action = {
            type: "UPDATE_CONTENT",
            value: {
                events: response
            }
        }
        this.props.dispatch(action)
    }

    getNextEvents = (events) => {
        let nextEvents = []
        events.map((event) => {
            // Gestion des exceptions pour les événements ne permettant pas de récupérer l'image ou la date de début
            try{
                const source = event.description.split('<')[5].split(',')[1].split(' ')[1]
                const startDate = event.startdate.split('@')[0]

                if(Date.parse(event.pubDate) > Date.now() && nextEvents.length < 1){
                    nextEvents.push(event)
                }
            } catch {
                console.log("erreur format")
            }
        })
        return nextEvents
    }

    goToArticle = (article) => {
        this.props.navigation.navigate('Article', {article:article})
    }

    goToEvent = (event, image) => {
        this.props.navigation.navigate('Evenement', {event: event, image: image})
    }
   
    render(){
        if(this.props.posts[0] !== undefined && this.props.events[0] !== undefined){
            this.props.navigation.setOptions({headerShown: true})
            return(
                <ScrollView style={style.container}>
                    
                    {/* SLIDER EVENTS */}
                    <View style={style.slider}>
                        {this.getNextEvents(this.props.events).map((event, index) => (
                            <Event 
                                key={index}
                                event={event}
                                onPress={this.goToEvent}
                            />
                        ))}
                        <Text style={style.topTitle}>Evénements</Text>
                    </View>

                    {/* POSTS MAPPING */}
                    {this.props.posts.map((article, index) => (
                        index === 0 ? (
                            <FirstPost 
                                key = {index}
                                article = {article}
                                onPress = {this.goToArticle}
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
            this.props.navigation.setOptions({headerShown: false})
            return (
                <Splash />
            )
        }
    } 
}

export default connect(mapStateToProps)(Actualites)

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
