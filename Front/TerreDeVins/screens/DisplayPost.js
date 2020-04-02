import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import HTML from 'react-native-render-html';
import Header from '../component/Header';
import BookmarkIcon from '../component/BookmarkIcon';

class DisplayPost extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const navigation = this.props.navigation
        const pubDate = new Date(navigation.getParam('pubDate'))
        const all_categories = navigation.getParam('categories') // Récupère toutes les catégories de l'articles
        const main_categories =  all_categories.slice(0,2)// Récupère les deux premières catégories de l'article
        const other_categories = all_categories.slice(2) // Récupère les catégories secondaires de l'article
        const full_content = navigation.getParam('content')

        return(
            <View>
                <Header />
                <ScrollView>
                    <View style = { styles.title_banner }>
                        <Text style = { styles.title }>{ navigation.getParam('title')}</Text>
                        <Text style = { styles.pubDate }>{ pubDate.toLocaleDateString() }</Text>
                    </View>
                    <View style = { styles.category_banner }>
                        <Text>{ main_categories[1].name }</Text>
                        <BookmarkIcon />
                    </View>
                    <View>
                        <Image
                            source = { require('../images/bouchons.png') }
                            style = { styles.image }
                        />
                    </View>
                    <View style = { styles.categories }>
                        {other_categories.map( category => 
                            <Text 
                                key = { category.id }
                                style = { styles.categories_text}
                            >
                                { category.name}
                            </Text>
                        )}
                    </View>
                    <View style = { styles.content } >
                        <HTML 
                            html = {full_content} 
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default DisplayPost;

const styles = StyleSheet.create({
    title_banner : {
        backgroundColor : '#B6A962',
        padding : 12,
        flexDirection : 'row',
    },
    title : {
        fontSize : 16,
        fontWeight : 'bold',
        color : '#FFF',
        flex : 4
    },
    pubDate : {
        textAlign : 'right',
        textAlignVertical : 'bottom',
        color : '#FFF',
        flex : 1,
    },
    category_banner : {
        flexShrink: 1,
        paddingVertical : 8,
        paddingHorizontal : 12,
        flexDirection : 'row',
        justifyContent : 'space-between',
        // borderColor: 'red',
        // borderWidth: 1
    },
    image : {
        width : '100%',
        height : 250,
    },
    categories : {
        paddingVertical : 8,
        paddingHorizontal : 12,
        flexDirection : 'row',
    },
    categories_text : {
        fontSize : 12,
        padding : 4,
        marginRight : 4,
        color : '#FFF',
        backgroundColor : '#7B7B7B'
    },
    content : {
        maxWidth : '100%',
        paddingHorizontal : 12,
    }
})