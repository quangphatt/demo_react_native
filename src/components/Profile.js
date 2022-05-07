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

       <AuthContext.Consumer>
         {/* {context=>(<View>
           <Text>{context.getUserInfo.result.data.result.name || "error"}</Text>
         </View>)} */}
         {context=>{context.getUserInfo();console.log(context.userInfo)}}
       </AuthContext.Consumer>
    );
  }
}

export default Profile;
