import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function FirstPost(props){

    //Récupération du champs 'Description' de l'article
    const description = props.article.description.split('>') 
    //Récupération de la balise image dans la description
    const image = description[4].split(' ')[3]
    //Récupération de l'url de la source
    const source = image.split('"')[1]
    //Récupération de la catégorie principale
    const mainCategory = props.article.categories[1].name

    return(
        <View style={style.container}>
            <View style={style.line}></View>
            <TouchableOpacity style={style.post}>
                <Image 
                    style={style.picture}
                    source={{uri: source}}
                />
                <View style={style.text}>
                    <Text style={style.title}>{props.article.title}</Text>
                    <Text style={style.category}>{mainCategory}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        maxWidth: '100%',
        height: 300,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    line:{
        width: '90%',
        height: .5,
        backgroundColor: '#44355B',
        opacity: .2,
        marginVertical: 10,
    },
    post:{
        maxWidth: '100%',
    },    
    picture:{
        flex: 1,
    },
    text:{
        flexShrink: 1,
    },
    title:{
        flex: 1,
        fontFamily: 'Sen-Regular',
        fontSize: 18,
        color: '#404040',
    },
    category:{
        fontFamily: 'Sen-Regular',
        fontSize: 12,
        color: '#404040',
        textTransform: 'capitalize'
    }
})