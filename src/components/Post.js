import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{color:'black'}}> Post </Text>
      </View>
    );
  }
}

export default Post;
