import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import {connect} from 'react-redux'
import HTMLView from 'react-native-htmlview'
import config from '../config'
import { TouchableOpacity } from 'react-native-gesture-handler'

const mapStateToProps = (state) => {
    return {
        favorites: state.favoritesReducer.favoritesIds
    }
}

function Article(props){

    const article = props.route.params.article
    const picture = article.description.split('>')[4].split(' ')[3].split('"')[1]
    const day = article.pubDate.split('-')[2].slice(0,2)
    const month = config.months[article.pubDate.split('-')[1] - 1]
    const year = article.pubDate.split('-')[0]
    const pubDate = day + ' ' + month + ' ' + year

    const arrayContent = article.content.split('\n')
    const content = []

    arrayContent.forEach(element => {
        if(element[0] !== '<' && element.length > 0){
            element = '<p>' + element + '</p>'
            content.push(element)
        } else {
            if(element.search('<strong>') >= 0){
                content.push(element.slice(element.search('<strong>'), element.search('</strong>')))
            }
        }
    });

    function toogleFavorite(post_id, post){
        const action = {
            type: "TOOGLE_FAVORITE",
            value: {
                id: post_id,
                post: post
            }
        }
        props.dispatch(action)
    }

    function isPostFavorite(post_id){
        if(props.favorites.indexOf(post_id) > -1){
            return true
        }
        return false
    }

    return(

        <ScrollView style={style.scrollview}>

            {/* TITLE */}
            <View style={style.title}>
                <Text style={style.titleText}>{article.title}</Text>
                <Text style={style.titleDate}>{pubDate}</Text>
            </View>

            {/* MAIN CATEGORY AND FAVORITE */}
            <View style={style.category}>
                <Text style={style.categoryText}>{article.categories[1].name}</Text>  
                <TouchableOpacity
                    onPress={() => toogleFavorite(article.id, article)}
                >
                    <Image 
                        source={isPostFavorite(article.id) ? (
                            require('../images/isFavorite.png')
                        ) : (
                            require('../images/favoris.png')
                        )}
                        style={{width: 13, height:17}}
                    />
                </TouchableOpacity>
            </View>

            {/* PICTURE */}
            <Image 
                source={{uri: picture}}
                style={style.picture}
            />

            {/* TAGS */}
            <View style={style.tags}>
                {article.categories.slice(2).map((tag, index) => (
                    <Text style={style.tag} key={index}>{tag.name}</Text>
                ))}
            </View>

            {/* CONTENT */}
            {content.map((p, index) => (<HTMLView style={style.content} stylesheet={htmlstyles} key={index} value={p}/>))}

            {/* AUTHOR */}
            <View style={style.author}>
                <View>
                    <Image 
                        source={require('../images/author.png')}
                    />
                    <Text style={style.authorText}>Auteur</Text>
                </View>
                <Text style={style.authorName}>{article.creator}</Text>
            </View>            
        </ScrollView>
    )
}

export default connect(mapStateToProps)(Article)

const htmlstyles = StyleSheet.create({
    strong:{
        fontFamily: 'Sen-Bold',
        fontSize: 16,
        color: "#404040"
    },
    p:{
        fontFamily: 'Sen-Regular',
        fontSize: 16,
        color: "#404040"
    },
    a:{
        fontFamily: 'Sen-Bold',
        color: '#5A2A75',
        textDecorationLine: 'underline'
    }
})

const style = StyleSheet.create({
    scrollview:{
        backgroundColor: '#FFFFFF'
    },
    title:{
        backgroundColor: '#B6A962',
        alignItems: 'flex-end',
        paddingHorizontal: 15,
        paddingVertical: 4,
    },
    titleText:{
        flex: 2,
        fontFamily: 'Sen-Bold',
        fontSize: 18,
        color: '#FFFFFF'
    },
    titleDate:{
        flex: 1,
        fontFamily: 'Sen-Regular',
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'right'
    },
    category:{
        height: 35,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    categoryText:{
        fontFamily: 'Sen-Regular',
        fontSize: 14,
        textTransform: 'capitalize'
    },
    picture:{
        width: '100%',
        height: 236
    },
    tags:{
        paddingHorizontal: 11,
        marginVertical: 8,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tag:{
        fontFamily: 'Sen-Regular',
        fontSize: 12,
        color: '#FFFFFF',
        backgroundColor: '#7B7B7B',
        padding: 4,
        margin: 4,
        textTransform: 'capitalize'
    },
    content:{
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    author:{
        flexDirection: "row",
        marginHorizontal: 15,
        marginBottom: 30,
    },
    authorText:{
        fontFamily: "Sen-Regular",
        fontSize: 10,
        color: "#404040",
        textAlign: "center",
        marginTop: 4,
    },
    authorName:{
        fontFamily: "Sen-Regular",
        fontSize: 12,
        color: "#404040"
    },
})