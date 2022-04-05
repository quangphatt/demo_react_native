import React, {Component} from 'react';
import AppNav from './src/components/AppNav';
import {AuthContext} from './src/contexts/AuthContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      logIn: () => {
        this.setState({isLogIn: true});
      },
      logOut: () => {
        this.setState({isLogIn: false});
      },
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
