import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HomeIcon from './HomeIcon';

class Menu extends React.Component {

    render(){
        return(
            <View style = { styles.container }>
                    <View>
                        <Image 
                            source = { require( '../images/vignes.png' ) }
                            style = { styles.image }
                        />
                        <LinearGradient
                            colors = { [ 'transparent', '#404040' ] }
                            start = {{ x : 0.0, y : 0.6 }}
                            style = { styles.linear_gradient }
                        >
                        </LinearGradient>
                    </View>
                    <View style = { styles.menu_container }>
                        <View style = { styles.menu }>
                            <TextInput style = { styles.text_input } placeholder = { 'Rechercher' }/>
                            <View style = { styles.menu_element }>
                                <HomeIcon fill = { '#FFF' } style = { styles.menu_element_icon }/>
                                <Text style = { styles.menu_element_text }>Actualités</Text>
                                <Text style = { styles.menu_element_list }>o</Text>
                            </View>
                            <View style = { styles.menu_element }>
                                <HomeIcon fill = { '#FFF' } style = { styles.menu_element_icon }/>
                                <Text style = { styles.menu_element_text }>Favoris</Text>
                                <Text style = { styles.menu_element_list }>o</Text>
                            </View>
                            <View style = { styles.menu_element }>
                                <HomeIcon fill = { '#FFF' } style = { styles.menu_element_icon }/>
                                <Text style = { styles.menu_element_text }>Evénements</Text>
                                <Text style = { styles.menu_element_list }>o</Text>
                            </View>
                            <View style = { styles.menu_element }>
                                <HomeIcon fill = { '#FFF' } style = { styles.menu_element_icon }/>
                                <Text style = { styles.menu_element_text }>Oenotourisme</Text>
                                <Text style = { styles.menu_element_list }>o</Text>
                            </View>
                            <View style = { styles.menu_element }>
                                <HomeIcon fill = { '#FFF' } style = { styles.menu_element_icon }/>
                                <Text style = { styles.menu_element_text }>Dégustations</Text>
                                <Text style = { styles.menu_element_list }>o</Text>
                            </View>
                        </View>
                    </View>
            </View>
        );
    }


}

export default Menu;

const styles = StyleSheet.create({
    container : {
        width : '75%',
        height : '100%',
        marginTop : 122,
        position : 'absolute',
        left : 0,
        alignSelf : 'center',
    },
    image : {
        width : '100%',
        height : 166,
        position : 'relative',
    },
    menu_container : {
        flex : 1,
        backgroundColor : '#404040',
        alignItems : 'center',
        borderColor : 'red',
        borderWidth : 1,
    },
    menu : {
        flex : 1,
        width : '100%',
        paddingTop : 32,
        alignItems : 'center',
    },
    text_input : {
        width : '90%',
        height : 30,
        textAlign : 'center',
        backgroundColor : '#FFF',
        borderRadius : 15,
    },
    menu_element : {
        flexDirection : 'row',
        margin : 16,
    },
    menu_element_icon : {
        flex : 1,
        color : '#FFF',
    },
    menu_element_text : {
        flex : 4,
        color : '#FFF',
        paddingLeft : 12,
    },
    menu_element_list : {
        flex : 1,
        color : '#FFF',
    },
    linear_gradient : {
        width : '100%',
        height : 166,
        position : 'absolute',
        top : 0,
        alignSelf : 'flex-start',
    }
})