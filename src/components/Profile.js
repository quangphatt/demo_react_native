import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text style={{color:'#000'}}>Profile</Text>
      </View>
    );
  }
}

export default Profile;
