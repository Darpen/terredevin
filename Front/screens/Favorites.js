import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import {connect} from 'react-redux'
import FavoritesPost from '../components/FavoritesPost'


const mapStateToProps = (state) => {
    return {
        favoritesIds: state.favoritesReducer.favoritesIds,
        favoritesPosts: state.favoritesReducer.favoritesPosts
    }
}

function Favorites(props){

    function goToArticle(post){
        this.props.navigation.navigate('Article', {post:post})
    }

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

    return(
        <View style={props.favoritesPosts.length != 0 ? style.container : style.empty}>
            
            {props.favoritesPosts.length != 0 ? (
                <View>
                    {props.favoritesPosts.map((post, index) => (
                        <FavoritesPost 
                            key={index}
                            post={post}
                            onPress={goToArticle}
                            toogleFavorite={toogleFavorite}
                        />
                    ))}
                </View>
            ):(
                <>
                    <Text style={style.text}>Vous n'avez pas sauvegardé de favoris.</Text>
                    <Text style={style.text}>Cliquez sur l'icône ci-dessous pour enregistrer vos articles préférés.</Text>
                    <Text style={style.text}>Vous pourrez les consulter plus tard, même hors ligne</Text>
                    <Image 
                        source={require('../images/favoris.png')}
                        style={style.image}
                    />
                </>
            )}
            
        </View>
    )
}

export default connect(mapStateToProps)(Favorites)

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#606060",
        alignItems: "center",
        paddingTop: 7.5,
    },
    empty:{
        flex: 1,
        backgroundColor: "#404040",
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        width: "90%",
        fontFamily: "Sen-Regular",
        fontSize: 14,
        color:"#FFFFFF",
        textAlign: "center"
    },
    image:{
        marginVertical: 20,
    }
})