import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{color: '#000'}}> Notification </Text>
      </View>
    );
  }
}

export default Notification;
