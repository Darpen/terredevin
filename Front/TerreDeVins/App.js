import React from 'react';
import axios from 'axios';
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
    console.log('restart cdm')
    axios.get("http://45b43491.ngrok.io/articles")
    .then( response => this.setState({posts : response.data}))
    .catch( error => console.log(error))
  }


  render(){
    return (
      <ScrollView>
        <Header />
        {this.state.posts.map((post, index) => <Post post = {post} />)}
        <Footer />
      </ScrollView>
    );
  }  
}

export default App;


