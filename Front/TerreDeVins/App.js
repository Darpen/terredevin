import React from 'react';
import axios from 'axios';
import config from './config';
import { ScrollView, View, StyleSheet } from 'react-native';
import Header from './component/Header';
import FirstPost from './component/FirstPost';
import Post from './component/Post';
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
    .then( response => this.setState({ posts : response.data }))
    .catch( error => console.log(error))
  }


  render(){
    return (
      <View style = { styles.body }>
        <Header />
        <ScrollView>          
          {this.state.posts.map((post, index) => {
            return index === 0 ? 
              <FirstPost post = { post } />
            :
              <Post post = { post } />          
          })}
          </ScrollView>
          <Footer />
      </View>
    );
  }  
}

export default App;

const styles = StyleSheet.create({
  body:{
    flex: 1,
    position: 'relative',
  }
})
