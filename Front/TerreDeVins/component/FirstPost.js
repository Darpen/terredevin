import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class FirstPost extends React.Component{

    render(){
        return(
            <View key = { this.props.post.id } style = { styles.container }>
                <View style = { styles.picture }>
                    <Image 
                        style = { styles.picture }
                        source={ require('../images/verre.png' )}
                    />
                </View>
                <View>
                    <Text style = { styles.title }>{ this.props.post.title }</Text>
                    <View style = { styles.category }>
                        <View style = {styles.vline}></View>
                        <Text style = {styles.category_name}>{ this.props.post.categories[1].name }</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default FirstPost;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        margin : 12,
        // borderColor: 'orange',
        // borderWidth: 1
    },
    picture : {
        width : '100%',
        height : 200,
        // borderColor: 'red',
        // borderWidth: 1
    },
    title : {
        flexShrink : 1,
        fontSize : 18,
        marginHorizontal : 4,
    },
    vline : {
        width : 2,
        height : 16,
        margin : 4,
        backgroundColor : '#79C744'
    },
    category : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    category_name : {
        color : '#5A5858',
    }
});