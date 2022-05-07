import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export class PostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <>
        <TouchableOpacity onPress={() => this.setState({showModal: true})}>
          <View
            style={{
              backgroundColor: '#33cc33',
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <FontAwesome5 name={'plus'} size={18} color={'#fff'} />
          </View>
        </TouchableOpacity>
        <View>
          <Modal
            backdropOpacity={0.3}
            isVisible={this.state.showModal}
            onBackdropPress={() => this.setState({showModal: false})}
            style={{justifyContent: 'flex-end', margin: 0}}>
            <View
              style={{
                height: '75%',
                backgroundColor: '#fff',
                padding: 22,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../assets/images/user.png')}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    borderColor: '#548ae8',
                    borderWidth: 2,
                  }}
                />
                <View style={{marginLeft: 5}}>
                  <Text style={{fontSize: 22, color: '#000'}}>User Name</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome5
                      name={'globe-americas'}
                      size={10}
                      color={'#000'}
                    />
                    <Text style={{color: '#000', marginLeft: 3}}>Public</Text>
                  </View>
                </View>
              </View>
              <View>
                <TextInput
                  placeholder="Write something ..."
                  multiline={true}
                  placeholderTextColor="#94abb3"
                  style={{
                    color: '#000',
                    fontSize: 18,
                    borderColor: '#94abb3',
                    borderWidth: 1,
                    height: 360,
                    borderRadius: 10,
                    alignItems: 'flex-start',
                    textAlignVertical: 'top',
                    padding: 10,
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity
                  onPress={() => this.setState({showModal: false})}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#eb7373',
                    borderRadius: 15,
                    padding: 10,
                    width: 120,
                  }}>
                  <FontAwesome5 name={'times'} size={18} color={'#fff'} />
                  <Text style={{color: '#fff', fontSize: 20, marginLeft: 7}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({showModal: false})}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#7e80e6',
                    borderRadius: 15,
                    padding: 10,
                    width: 120,
                  }}>
                  <FontAwesome5 name={'edit'} size={18} color={'#fff'} />
                  <Text style={{color: '#fff', fontSize: 20, marginLeft: 7}}>
                    Post
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </>
    );
  }
}

class Post extends Component {
  render() {
    return null;
  }
}

export default Post;
