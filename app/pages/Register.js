import React, { Component } from 'react';
import {
  TextInput, StyleSheet, Text, Button, View, PixelRatio,
  TouchableOpacity,
  Image, Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { post } from '../utils/request';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      surePassword: '',
      name: '',
      avatarSource: null,
      fileName: '',
    };
  }

  register = () => {
    if (this.state.password === this.state.surePassword) {
      const { navigation } = this.props;
      const formData = new FormData();
      const image = { uri: this.state.avatarSource.uri, type: 'multipart/form-data', name: this.state.fileName };
      formData.append('account', this.state.user);
      formData.append('password', this.state.password);
      formData.append('name', this.state.name);
      formData.append('avatar', image);
      post('/user/register', formData)
        .then((res) => {
          Alert.alert('提示', res.msg);
          navigation.navigate('Login');
        });
    } else {
      Alert.alert('提示', '两次密码不一致');
    }
  }

  selectPhotoTapped() {
    const options = {
      title: '选择图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '选择照片',
      customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
      ],
      cameraType: 'back',
      mediaType: 'photo',
      videoQuality: 'high',
      durationLimit: 10,
      maxWidth: 300,
      maxHeight: 300,
      quality: 0.8,
      angle: 0,
      allowsEditing: false,
      noData: false,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log(source, 'source');// uri: "file:///Users/a91/Library/Developer/CoreSimulator/…ocuments/B7AE02C0-C2FC-4F28-8671-CABF76CAFBC4.jpg"
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
          fileName: response.fileName,
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.subone}
          placeholder="用户名(请使用邮箱)"
          onChangeText={user => this.setState({ user })}
        />

        <TextInput
          style={styles.subone}
          placeholder="昵称"
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          style={styles.subone}
          placeholder="密码"
          onChangeText={password => this.setState({ password })}
        />
        <TextInput
          style={styles.subone}
          placeholder="再次输入密码"
          onChangeText={surePassword => this.setState({ surePassword })}
        />
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, { marginBottom: 30 }]}>
            { this.state.avatarSource === null ? <Text>上传头像</Text>
              : (
                <Image
                  style={styles.avatar}
                  source={this.state.avatarSource}
                />
              )
            }
          </View>
        </TouchableOpacity>
        <View style={styles.register}>
          <Button
            title="注册"
            onPress={this.register}
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
    alignItems: 'center',
  },
  subone: {
    width: 300,
    height: 40,
    marginTop: 20,
    backgroundColor: '#F7F7F7',
  },
  register: {
    marginTop: 20,
    width: 200,
    backgroundColor: '#F5D33D',
  },
  avatarContainer: {
    marginTop: 20,
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
  },

});
