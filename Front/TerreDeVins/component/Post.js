import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

class Post extends React.Component{
    render(){
        return(
            <View key = { this.props.post.id } style = { styles.container }>
                <View style = { styles.image }>
                    <Image 
                        style = { styles.image }
                        source={{uri:'https://www.vinotrip.com/fr/blog/wp-content/uploads/2016/02/exportation-vin1.png'}}
                    />
                </View>
                <View style = { styles.textes }>
                    <Text style = { styles.titre }>{ this.props.post.title }</Text>
                    <Text style = { styles.categorie }>{ this.props.post.categories[1].name }</Text>
                </View>
            </View>
        );
    }
}

export default Post;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'yellowgreen',
        borderWidth: 1
    },
    image:{
        width: 100,
        height: 100,
        borderColor: 'red',
        borderWidth: 1
    },
    texte:{
    },
    titre:{

    },
    categorie:{

    }
});