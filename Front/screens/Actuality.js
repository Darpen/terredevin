import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Axios from 'axios'
import Post from '../components/Post'
import FirstPost from '../components/FirstPost'
import Event from '../components/Event'
import Splash from '../screens/Splash'

let mapStateToProps = (state) => {
    console.log('State: ', state)
    return {
        posts: state.contentReducer.posts,
        events: state.contentReducer.events
    }
}

const URL = "http://8c6d8903.ngrok.io"

class Actuality extends React.Component{

    tooglePosts = (data) => {
        const action = {
            type: "UPDATE_POSTS",
            value: {
                data: data
            }
        }
        this.props.dispatch(action)
    }

    toogleEvents = (data) => {
        const action = {
            type: "UPDATE_EVENTS",
            value: {
                data: data
            }
        }
        this.props.dispatch(action)
    }

    postsMapping = (posts) => {
        try{
            posts.map(post => <Text>{post.title}</Text>)
        } catch {
            <Text>Impossible de map</Text>
        }
    }

    goToArticle = (article) => {
        this.props.navigation.navigate('Article', {article:article})
    }

    goToEvent = (event, image) => {
        this.props.navigation.navigate('Evenement', {event: event, image: image})
    }

    getNextEvents = (events) => {
        if(events[0] !== undefined){
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
    }

    componentDidMount(){
        Axios.get(URL + '/articles/20')
        .then(response => this.tooglePosts(response.data))
        .catch(error => console.log(error))

        Axios.get(URL + '/evenements')
        .then(response => this.toogleEvents(response.data))
        .catch(error => console.log(error))
    }

    render(){
        console.log('Render: \n', Object.prototype.toString.call(this.props.posts))
        if(
        Object.prototype.toString.call(this.props.posts) == '[object Array]' 
            && 
        Object.prototype.toString.call(this.props.events) == '[object Array]'
        ){
            return(
                <ScrollView style={style.container}>
                    
                    {/* SLIDER EVENTS */}
                    <View style={style.slider}>
                        {this.props.events[0] !== undefined ? (
                            this.getNextEvents(this.props.events).map( (event, index) => (
                                <Event 
                                    key={index}
                                    event={event}
                                    onPress={this.goToEvent}
                                />
                            ))
                        ) : (
                            <></>
                        )}
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
            return(
                <Splash />
            )
        }
    }
}

export default connect(mapStateToProps)(Actuality)

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