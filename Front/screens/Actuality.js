import React from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Post from '../components/Post'
import FirstPost from '../components/FirstPost'
import SliderEvents from '../components/SliderEvents'

let mapStateToProps = (state) => {
    return {
        posts: state.contentReducer.posts,
        events: state.contentReducer.events
    }
}

class Actuality extends React.Component{

    // Envoi des données Posts vers le store Redux
    tooglePosts = (data) => {
        const action = {
            type: "UPDATE_POSTS",
            value: {
                data: data
            }
        }
        this.props.dispatch(action)
    }

    // Envoi des données Events vers le store Redux
    toogleEvents = (data) => {
        const action = {
            type: "UPDATE_EVENTS",
            value: {
                data: data
            }
        }
        this.props.dispatch(action)
    }

    // Envoi des données Degustations vers le store Redux
    toogleDegustations = (data) => {
        const action = {
            type: "UPDATE_DEGUSTATIONS",
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

    goToPost = (post) => {
        this.props.navigation.navigate('Article', {post:post})
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
                    // console.log("erreur format")
                }
            })
            return nextEvents
        }
    }

    render(){
        return(
            <ScrollView style={style.container}>
                
                {/* SLIDER EVENTS */}
                <View style={style.slider}>
                    {this.props.events[0] !== undefined ? (
                        this.getNextEvents(this.props.events).map( (event, index) => (
                            <SliderEvents 
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
                {this.props.posts.map((post, index) => (
                    index === 0 ? (
                        <FirstPost 
                            key = {index}
                            post = {post}
                            onPress = {this.goToPost}
                        />
                    ) : (
                        <Post 
                            key = {index}
                            post = {post}
                            onPress = {this.goToPost}
                        />
                    )
                ))}
            </ScrollView>
        )
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