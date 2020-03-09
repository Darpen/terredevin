import React from 'react';
import axios from 'axios';
import config from './config';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Post from './component/Post';
import Header from './component/Header';
import Footer from './component/Footer';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      posts : []
    }
  }

  componentDidMount(){
    axios.get(config.APIlink)
    .then( response => this.setState({posts : response.data}))
    .catch( error => console.log(error))
  }


  render(){
    return (
      <ScrollView>
        <Header />
        {this.state.posts.map((post) => <Post post = {post} />)}
        <Footer />
      </ScrollView>
    );
  }  
}

export default App;


