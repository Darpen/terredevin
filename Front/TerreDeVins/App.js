import React from 'react';
import axios from 'axios';
import config from './config';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import Header from './component/Header';
import Event from './component/Event';
import FirstPost from './component/FirstPost';
import Post from './component/Post';
import Menu from './component/Menu';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      posts : [],
      event : {},
      show_menu : false,
    }
  }

  componentDidMount(){
    axios.get(config.APIlink + "/articles")
    .then( response => this.setState({ posts : response.data }))
    .catch( error => console.log( error ))

    axios.get(config.APIlink + "/evenement/1")
    .then( response => this.setState({ event : response.data }))
    .catch( error => console.log( error ))
  }

  handleShowMenu = () => {
    this.state.show_menu ? (
      this.setState({ show_menu : false })
    ) : (
      this.setState({ show_menu : true })
    )
  }


  render(){
    return (
      <View style = { styles.body }>
        <Header 
          handleShowMenu = { this.handleShowMenu }
          show_menu = { this.state.show_menu }  
        />
        <ScrollView>          
          <Event event = { this.state.event } />
          {this.state.posts.map((post, index) => {
            return index === 0 ? 
              <FirstPost post = { post } />
            :
              <Post post = { post } />          
          })}
          </ScrollView>
          <Menu show_menu = { this.state.show_menu } />
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
