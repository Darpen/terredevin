// IMPORT REACT
import React from 'react'
import { Image } from 'react-native'

// IMPORT REACT NAVIGATION
import { createDrawerNavigator } from '@react-navigation/drawer'

//IMPORT REDUX
import { connect } from 'react-redux'

// IMPORT DES COMPOSANTS
import Home from './Home'
import FavoritesStack from './FavoritesStack'
import EventsStack from './EventsStack'
import DegustationStack from "./DegustationsStack"
import Axios from 'axios'
import Splash from '../screens/Splash'
import CustomDrawerContent from '../components/CustomDrawer';

const URL = "http://d13eef6d.ngrok.io"

const mapStateToProps = (state) => {
    return {
        posts: state.contentReducer.posts,
        events: state.contentReducer.events
    }
}

let state = {
    posts: [],
    events: []
}

const Drawer = createDrawerNavigator()

class RootComponent extends React.Component {

    updateData = () => {
        Axios.get(URL + '/articles/20')
            .then(response => state.posts = response.data)
            .catch(error => console.log(error))
    
        Axios.get(URL + '/evenements')
            .then(response => state.events = response.data)
            .catch(error => console.log(error))
    }

    UNSAFE_ComponentWillMount() {
        this.updateData()
    }

    getIcon = (isFocused) => {
        if (isFocused) {
            return (
                <Image
                    source={require('../images/isFavorite.png')}
                    style={{width: 15, height: 20}}
                />
            )
        } else {
            <Image
                source={require('../images/favoris.png')}
                style={{width: 15, height: 20}}
            />
        }
    }

    checkUpdates = () => {
        try {
            if (state.posts.length != 0) {
                if (state.posts[0].title == this.props.posts[0].title) {
                    console.log("Artiles à jour")
                } else {
                    console.log("Besoin de mettre à jour")
                    this.updateData()
                }
            }
            else {
                console.log("pas d'article")
                this.updateData()
            }
        } catch {
            console.log("erreur checkUpdates")
            this.updateData()
        }
    }
    
    render() {
        if (
            Object.prototype.toString.call(this.props.posts) == '[object Array]'
            &&
            Object.prototype.toString.call(this.props.events) == '[object Array]'
        ) {
            this.checkUpdates()
            return (
                <Drawer.Navigator
                    drawerContent={(props)=><CustomDrawerContent {...props} />}
                    initialRouteName='Actualités'
                    drawerPosition='right'
                    hideStatusBar={true}
                    statusBarAnimation='none'
                    backBehavior='initialRoute'
                    drawerContentOptions={{
                        activeTintColor: "#B6A962",
                        inactiveTintColor: "#FFF",
                        activeBackgroundColor: "#404040",
                        labelStyle: {
                            fontFamily: "Sen-Regular",
                            fontSize: 20,
                        }
                    }}
                >
                    <Drawer.Screen
                        component={Home}
                        name='Actualités'
                        options={{
                            drawerIcon: ({ focused }) => (
                                focused ? (
                                    <Image
                                    source={require('../images/icon-actuality-active.png')}
                                    style={{width: 15, height: 20}}
                                />
                                ) : (
                                <Image
                                    source={require('../images/icon-actuality-inactive.png')}
                                        />
                                )
                            ) 
                        }}
                    />

                    <Drawer.Screen
                        component={FavoritesStack}
                        name='Favoris'
                        options={{
                            drawerIcon: ({ focused }) => (
                                focused ? (
                                    <Image
                                    source={require('../images/icon-favorites-active.png')}
                                />
                                ) : (
                                <Image
                                    source={require('../images/icon-favorites-inactive.png')}
                                        />
                                )
                            ) 
                        }}
                    />

                    <Drawer.Screen
                        component={EventsStack}
                        name='Evénements'
                        options={{
                            drawerIcon: ({ focused }) => (
                                focused ? (
                                    <Image
                                    source={require('../images/icon-event-active.png')}
                                    style={{width: 15, height: 20}}
                                />
                                ) : (
                                <Image
                                    source={require('../images/icon-event-inactive.png')}
                                    style={{width: 15, height: 20}}
                                        />
                                )
                            ) 
                        }}
                    />

                    <Drawer.Screen
                        component={DegustationStack}
                        name='Dégustation'
                        options={{
                            drawerIcon: ({ focused }) => (
                                focused ? (
                                    <Image
                                    source={require('../images/icon-event-active.png')}
                                    style={{width: 15, height: 20}}
                                />
                                ) : (
                                <Image
                                    source={require('../images/icon-event-inactive.png')}
                                    style={{width: 15, height: 20}}
                                        />
                                )
                            ) 
                        }}
                    />
                </Drawer.Navigator>
            )
        }
        else {
            return (
                <Splash
                    checkUpdates={this.checkUpdates}
                />
            )
        }
    }
}

export default connect(mapStateToProps)(RootComponent)