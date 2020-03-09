import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Post extends React.Component{
    render(){
        return(
            <View key={this.props.post.id} style={styles.container}>
                <Text>{this.props.post.id}</Text>
                <Text>{this.props.post.title}</Text>
                <Text>{this.props.post.creator}</Text>
            </View>
        );
    }
}

export default Post;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      borderColor: '#000',
      borderStyle: 'solid',
      borderWidth: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });