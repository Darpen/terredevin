import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'

export default function Article(props){

    const article = props.route.params.article
    const image = article.description.split('>')[4].split(' ')[3].split('"')[1]

    return(
        <ScrollView>
            <View>
                <Text>{article.title}</Text>
                <Text>{article.pubDate}</Text>
            </View>
            <View>
                <Text>{article.categories[1].name}</Text>   
            </View>
            <Image 
                source={{uri: image}}
                style={style.image}
            />
            <View>
                {article.categories.slice(2).map((tag, index) => (
                    <Text key={index}>{tag.name}</Text>
                ))}
            </View>
            
        </ScrollView>
    )
}

const style = StyleSheet.create({
    image:{
        width: '100%',
        height: 236
    }
})