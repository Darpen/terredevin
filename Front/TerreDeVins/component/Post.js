import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

class Post extends React.Component{
    render(){
        return(
            <View key={this.props.post.id} style={styles.container}>
                <Image 
                    style={styles.image} 
                    source={{uri: 'https://www.vinotrip.com/fr/blog/wp-content/uploads/2016/02/exportation-vin1.png'}}
                />
                <View style={styles.textes}>
                    <Text style={styles.titre}>{this.props.post.title}</Text>
                    <Text style={styles.categorie}>{this.props.post.categories[1].name}</Text>
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
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 0.5,
    },
    textes: {
        marginLeft: 12,
    },
    titre:  {
        fontSize: 20,
        width: '45%',
    },
    categorie: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: '#7B7B7B',
        borderLeftColor: '#79C744',
        borderLeftWidth: 2,
        paddingLeft: 6,
    },
    image: {
        width: 100,
        height: 100,
    }
  });