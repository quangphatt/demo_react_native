import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Feed from './Feed';
import Notifycation from './Notifycation';
import Post from './Post';
import Setting from './Setting';
import Profile from './Profile';
import Others from './Others';
import About from './About';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome5
                  name={'home'}
                  size={21}
                  color={focused ? '#000' : '#9c9c9c'}
                />
                <Text
                  style={{color: focused ? '#000' : '#9c9c9c', fontSize: 9}}>
                  Feed
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Notifycation"
          component={Notifycation}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome5
                  name={'bell'}
                  size={21}
                  color={focused ? '#000' : '#9c9c9c'}
                />
                <Text
                  style={{color: focused ? '#000' : '#9c9c9c', fontSize: 9}}>
                  Notification
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={Post}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  backgroundColor: focused ? '#009933' : '#33cc33',
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <FontAwesome5 name={'plus'} size={18} color={'#fff'} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome5
                  name={'cog'}
                  size={21}
                  color={focused ? '#000' : '#9c9c9c'}
                />
                <Text
                  style={{color: focused ? '#000' : '#9c9c9c', fontSize: 9}}>
                  Setting
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Others"
          component={Others}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome5
                  name={'align-justify'}
                  size={21}
                  color={focused ? '#000' : '#9c9c9c'}
                />
                <Text
                  style={{color: focused ? '#000' : '#9c9c9c', fontSize: 9}}>
                  Others
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    );
  }
}

export default Home;
