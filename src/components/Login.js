import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthContext} from '../contexts/AuthContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      username: '',
      password: '',
    };
  }

  showPass = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  render() {
    return (
      <View style={styles.login_wrapper}>
        <View style={styles.logo_wrapper}>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.png')}
          />
        </View>

        <View>
          <View style={styles.text_input_wrapper}>
            <TextInput
              style={styles.text_input}
              placeholder="Email"
              value={this.state.username}
              onChangeText={newUsername => {
                this.setState({
                  username: newUsername,
                });
              }}
            />
            <TouchableOpacity style={styles.icon_wrapper}>
              <FontAwesome5 style={styles.icon} name={'user-plus'} />
            </TouchableOpacity>
          </View>

          <View style={styles.text_input_wrapper}>
            <TextInput
              style={styles.text_input}
              placeholder="Password"
              secureTextEntry={!this.state.showPassword}
              value={this.state.password}
              onChangeText={newPass => {
                this.setState({
                  password: newPass,
                });
              }}
            />
            <TouchableOpacity
              style={styles.icon_wrapper}
              onPress={this.showPass}>
              {this.state.showPassword ? (
                <FontAwesome5 style={styles.icon} name={'eye-slash'} />
              ) : (
                <FontAwesome5 style={styles.icon} name={'eye'} />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgot_pass_wrapper}>
            <Text style={{fontSize: 12, color: 'black', right: 50}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <AuthContext.Consumer>
            {context => (
              <TouchableOpacity
                style={styles.btn_signin}
                onPress={context.logIn}>
                <Text style={styles.btn_text}>Sign In</Text>
              </TouchableOpacity>
            )}
          </AuthContext.Consumer>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
            }}>
            <Text
              style={{
                position: 'absolute',
                backgroundColor: 'white',
                padding: 10,
                zIndex: 1,
                fontSize: 12,
              }}>
              OR
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#94abb3',
                width: 200,
              }}></View>
          </View>

          <TouchableOpacity style={styles.btn_scan_qr}>
            <Text style={{fontSize: 17, color: '#1C75BC'}}>Scan QR Code</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_signin_google}>
            <FontAwesome5 style={styles.btn_text} name={'google-plus-g'} />
            <Text style={styles.btn_text}> Sign In With Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login_wrapper: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  logo_wrapper: {
    alignItems: 'center',
    margin: 30,
  },
  logo: {
    height: 160,
    width: 300,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
  },
  text_input_wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_wrapper: {
    position: 'absolute',
    right: 60,
  },
  icon: {
    height: 15,
    width: 15,
    color: 'black',
  },
  text_input: {
    width: 320,
    fontSize: 14,
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#94abb3',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 7,
    marginBottom: 7,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 45,
  },
  forgot_pass_wrapper: {
    alignItems: 'flex-end',
  },
  btn_text: {
    color: 'white',
    fontSize: 17,
  },
  btn_signin: {
    height: 45,
    width: 320,
    borderRadius: 5,
    backgroundColor: '#1C75BC',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  btn_scan_qr: {
    height: 45,
    width: 320,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#1C75BC',
    borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btn_signin_google: {
    height: 45,
    width: 320,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#D04A4A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});

export default Login;