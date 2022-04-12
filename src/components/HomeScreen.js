import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feed from './Feed';
import Notification from './Notification';
import Post, { PostModal } from './Post';
import Others from './Others';
import Message from './Message';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

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
          name="Message"
          component={Message}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome5
                  name={'comment-dots'}
                  size={21}
                  color={focused ? '#000' : '#9c9c9c'}
                />
                <Text
                  style={{color: focused ? '#000' : '#9c9c9c', fontSize: 9}}>
                  Message
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={Post}
          options={{
            tabBarButton: ()=>(<PostModal />)
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
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

const styles = StyleSheet.create({
  drawer_screen: {
    alignItems: 'center',
  },
  drawer_item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_wrapper: {
    alignItems: 'center',
    width: '20%',
  },
  icon: {},
  drawer_txt: {
    fontSize: 16,
  },
});

export default HomeScreen;
