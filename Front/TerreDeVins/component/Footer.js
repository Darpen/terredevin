import React from 'react';
import HomeIcon from './HomeIcon';
import BookmarkIcon from './BookmarkIcon';
import EventIcon from './EventIcon';
import {View, StyleSheet, Text} from 'react-native';

class Footer extends React.Component{

    render(){
        return(
            <View style = { styles.container }>
                <View style = { styles.icons }>
                    <HomeIcon />
                    <Text style = { styles.icon_text }>Actualités</Text>
                </View>
                <View style = { styles.icons }>
                    <BookmarkIcon />
                    <Text style = { styles.icon_text }>Favoris</Text>
                </View>
                <View style = { styles.icons} >
                    <EventIcon />
                    <Text style = { styles.icon_text }>Evénements</Text>
                </View>
            </View>
        );
    }


}

export default Footer;

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 56,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
    },
    icons:{
        width: 80,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon_text:{
        fontSize: 12,
    }
})