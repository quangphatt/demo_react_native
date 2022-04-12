import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {AuthContext} from '../contexts/AuthContext';

import Feed from './Feed';
import Notifycation from './Notifycation';
import Post from './Post';
import Setting from './Setting';
import Profile from './Profile';
import Others from './Others';
import About from './About';
import Message from './Message';
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
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
        }}
        drawerContent={props => {
          return (
            <View style={{flex: 1}}>
              <DrawerContentScrollView {...props}>
                <ImageBackground
                  source={require('../assets/images/menu-bg.jpeg')}
                  style={{padding: 20}}>
                  <Image
                    source={require('../assets/images/user.png')}
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 40,
                      marginBottom: 10,
                    }}
                  />
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 20,
                      fontFamily: 'Roboto-Medium',
                      marginBottom: 5,
                    }}>
                    Lai Quang Phat
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#ffbf00',
                        fontFamily: 'Roboto-Regular',
                        marginRight: 5,
                      }}>
                      Premium Account
                    </Text>
                    <FontAwesome5 name="coins" size={12} color="#ffbf00" />
                  </View>
                </ImageBackground>
                <View
                  style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                  <DrawerItemList {...props} />
                </View>
              </DrawerContentScrollView>
              <View
                style={{
                  padding: 20,
                  borderTopWidth: 1,
                  borderTopColor: '#ccc',
                }}>
                <AuthContext.Consumer>
                  {context => (
                    <TouchableOpacity onPress={context.logOut}>
                      <View style={styles.drawer_item}>
                        <View style={styles.icon_wrapper}>
                          <FontAwesome5
                            name="sign-out-alt"
                            style={styles.icon}
                            size={16}
                            color={'#000'}
                          />
                        </View>
                        <Text style={{...styles.drawer_txt, color: '#000'}}>
                          Log out
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </AuthContext.Consumer>
              </View>
            </View>
          );
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          style={styles.drawer_screen}
          options={{
            drawerLabel: ({color}) => (
              <View style={styles.drawer_item}>
                <View style={styles.icon_wrapper}>
                  <FontAwesome5
                    name="home"
                    style={styles.icon}
                    size={16}
                    color={color}
                  />
                </View>
                <Text style={{color: color, ...styles.drawer_txt}}>Home</Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          style={styles.drawer_screen}
          options={{
            drawerLabel: ({color}) => (
              <View style={styles.drawer_item}>
                <View style={styles.icon_wrapper}>
                  <FontAwesome5
                    name="user"
                    style={styles.icon}
                    size={16}
                    color={color}
                  />
                </View>
                <Text style={{color: color, ...styles.drawer_txt}}>
                  Profile
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={Setting}
          style={styles.drawer_screen}
          options={{
            drawerLabel: ({color}) => (
              <View style={styles.drawer_item}>
                <View style={styles.icon_wrapper}>
                  <FontAwesome5
                    name="cog"
                    style={styles.icon}
                    size={16}
                    color={color}
                  />
                </View>
                <Text style={{color: color, ...styles.drawer_txt}}>
                  Setting
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          style={styles.drawer_screen}
          options={{
            drawerLabel: ({color}) => (
              <View style={styles.drawer_item}>
                <View style={styles.icon_wrapper}>
                  <FontAwesome5
                    name="info"
                    style={styles.icon}
                    size={16}
                    color={color}
                  />
                </View>

                <Text style={{color: color, ...styles.drawer_txt}}>
                  About Us
                </Text>
              </View>
            ),
          }}
        />
      </Drawer.Navigator>
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

export default Home;
