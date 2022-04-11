import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {AuthContext} from '../contexts/AuthContext';

class Others extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{color: '#000'}}> Others </Text>
        <AuthContext.Consumer>
          {context => (
            <TouchableOpacity onPress={context.logOut}>
              <Text style={{color: 'red'}}>Log Out</Text>
            </TouchableOpacity>
          )}
        </AuthContext.Consumer>
      </View>
    );
  }
}

export default Others;
