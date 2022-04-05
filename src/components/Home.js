import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feed from './Feed';
import Notifycation from './Notifycation';
import Setting from './Setting';
import Profile from './Profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#635d54',
          tabBarActiveBackgroundColor: '#f2bf72',
          tabBarInctiveBackgroundColor: '#fff',
        }}>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({focused, color}) => (
              <FontAwesome5
                name={'home'}
                size={20}
                color={focused ? '#524c43' : '#696156'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifycation"
          component={Notifycation}
          options={{
            tabBarIcon: ({focused, color}) => (
              <FontAwesome5
                name={'bell'}
                size={20}
                color={focused ? '#524c43' : '#696156'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: ({focused, color}) => (
              <FontAwesome5
                name={'cog'}
                size={20}
                color={focused ? '#524c43' : '#696156'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused, color}) => (
              <FontAwesome5
                name={'user'}
                size={20}
                color={focused ? '#524c43' : '#696156'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default Home;
