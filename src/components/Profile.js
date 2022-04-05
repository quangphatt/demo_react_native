import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    console.log('Profile will unmount');
  }

  // logOut=()=>{
  //   this.props.navigation.navigate('Login');
  // }

  render() {
    return (
      <View>
        
          <Text>Hello</Text>
          <AuthContext.Consumer>{(context)=>(<TouchableOpacity onPress={context.logOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>)}
          
        </AuthContext.Consumer>
      </View>
    );
  }
}

export default Profile;
