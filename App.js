import React, {Component} from 'react';
import AppNav from './src/components/AppNav';
import {AuthContext} from './src/contexts/AuthContext';
import {LogBox} from 'react-native';
import fetch_api from './src/service';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userInfo:{
        name:"",
        username:"",
      },
      logIn: (username, password) => {
        // this.setState({isLogin: true});
        var params = {
          db: 'xboss_uat25052021',
          login: username,
          password: password,
        };
        fetch_api(
          {params: params},
          res => !res.data.error,
          '/web/session/authenticate',
        )
          .then(res => {
            this.setState({isLogin: true});
          })
          .catch(() => {
            console.log('Incorrect Username or Password');
          });
      },
      logOut: () => {
        // this.setState({isLogin: false});
        fetch_api({params: {}}, res => !res.data.error, '/web/session/destroy')
          .then(res => {
            this.setState({isLogin: false,userInfo:{name:"",username:""}});
          })
          .catch(() => {
            console.log('Log out Error!');
          });
      },
      getUserInfo: ()=>{
        return fetch_api({params:{}},res=>true,'/web/session/get_session_info').then(res=>{
          console.log(res.data.result.name)
          console.log(res.data.result.username)
        })
        
      }
    };
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        <AppNav />
      </AuthContext.Provider>
    );
  }
}

export default App;
