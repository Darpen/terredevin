import React from 'react';
import config from '../config';
import { Text } from 'react-native';
import Axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

export default class Actualites extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount(){
        Axios.get(config.APIlink + '/articles/5')
        .then(response => this.setState({articles:response.data}))
        .catch(error => console.log(error))
    }
    

    render(){
        return(
            <ScrollView>
                {this.state.articles.map(article => <Text>{article.title}</Text>)}
            </ScrollView>
        )
    }
    
}
