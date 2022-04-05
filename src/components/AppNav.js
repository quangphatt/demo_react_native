import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../contexts/AuthContext';
import Home from './Home';
import Login from './Login';

const Stack = createNativeStackNavigator();

class AppNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    

    return (
      // <NavigationContainer>
      //   <Stack.Navigator
      //     screenOptions={{
      //       headerShown: false,
      //     }}>
      //     <Stack.Screen name="Login" component={Login} />
      //     <Stack.Screen name="Home" component={Home} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      <AuthContext.Consumer>
        {context =>
          context.isLogIn ? (
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen name="Home" component={Home} />
              </Stack.Navigator>
            </NavigationContainer>
          ) : (
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen name="Login" component={Login} />
              </Stack.Navigator>
            </NavigationContainer>
          )
        }
      </AuthContext.Consumer>
    );
  }
}

export default AppNav;
