import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Event extends React.Component {

    render(){
        return(
            <View styles = { styles.container }>
                <View style = { styles.banner }>
                    <Text style = { styles.banner_text }>Evénement</Text>
                </View>
                <View>
                    <Image 
                        style = { styles.image }
                        source = { require( '../images/event.png' ) }
                    />
                    <View style = { styles.event_footer }>
                        <Text style = { styles.title }>{ this.props.event.title }</Text>
                        <View style = { styles.place_date }>
                            <View style = { styles.place_tag }>
                                <Text style = { styles.place }>Bordeaux</Text>
                            </View>
                            <Text style = { styles.date }>Date</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}

export default Event;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        borderColor : 'yellowgreen',
        borderWidth : 1,
        position : 'relative',
    },
    banner : {
        height : 36,
        backgroundColor : '#B6A962',
        justifyContent : 'center',
    },
    banner_text : {
        fontSize : 20,
        color : '#FFF',
        fontWeight : 'bold',
        textAlign : 'center',
    },
    image : {
        width : '100%',
    },
    event_footer : {
        width : '100%',
        padding : 12,
        backgroundColor : 'rgba( 0, 0, 0, 0.4 )',
        position : 'absolute',
        bottom : 0,
        alignSelf : 'flex-end',
    },
    title : {
        color : '#FFF',
        fontSize : 18,
    },
    place_date : {
        marginTop : 12,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    place_tag : {
        paddingVertical : 1,
        paddingHorizontal : 6,
        backgroundColor : '#B6A962',
    },
    place : {
        color : '#FFF',
    },
    date : {
        color : '#FFF',
    }
})