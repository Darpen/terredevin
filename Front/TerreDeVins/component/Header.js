import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Header extends React.Component{

    render(){
        return(
            <View style = { styles.header} >
                <TouchableOpacity style = { styles.burger } onPress = { this.props.handleShowMenu }>
                    <Image 
                        source = { this.props.show_menu ? require('../images/cross.png') : require('../images/burger.png') }
                    />
                </TouchableOpacity>
                <View style = { styles.logo }>
                    <Image
                        source = { require('../images/Logo.png') }
                    />
                </View>
                <View style = { styles.empty }></View>
            </View>
        );
    }


}

export default Header;

const styles = StyleSheet.create({
    header:{
        height: 88,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex : 999,
        marginTop: 34,
        // borderColor: 'blue',
        // borderWidth: 1,
    },
    burger:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: 'blue',
        // borderWidth: 1,        
    },
    logo:{
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    empty:{
        flex: 1
    }
})