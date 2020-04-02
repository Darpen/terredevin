import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class Post extends React.Component{

    render(){
        return(
            <TouchableOpacity 
                key = { this.props.post.id } 
                style = { styles.container }
                onPress = { () => {this.props.navigation('DisplayPost', this.props.post) }}
            >
                <View style = { styles.picture }>
                    <Image 
                        style = { styles.picture }
                        source = {{uri:'https://www.vinotrip.com/fr/blog/wp-content/uploads/2016/02/exportation-vin1.png'}}
                    />
                </View>
                <View style = { styles.texts }>
                    <Text style = { styles.title }>{ this.props.post.title }</Text>
                    <View style = { styles.category }>
                        <View style = {styles.vline}></View>
                        <Text style = {styles.category_name}>{ this.props.post.categories[1].name }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Post;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 12,
        // borderColor: 'yellowgreen',
        // borderWidth: 1
    },
    picture:{
        width: 100,
        height: 100,
        // borderColor: 'red',
        // borderWidth: 1
    },
    texts:{
        flexShrink: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        // borderColor: 'red',
        // borderWidth: 1
    },
    title:{
        flexShrink: 1,
        fontSize: 18,
        marginHorizontal: 4,
        textAlign: 'right',
    },
    vline:{
        width: 2,
        height: 16,
        margin: 4,
        backgroundColor: '#79C744'
    },
    category:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    category_name:{
        color: '#5A5858',
    }
});