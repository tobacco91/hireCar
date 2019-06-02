import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button, ScrollView, PixelRatio,
  TouchableOpacity, AsyncStorage,
  Image, Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { post } from '../utils/request';

export default class Release extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: 0,
      phone: 0,
      description: '',
      avatarSource: null,
      fileName: '',
    };
  }

  // 选择图片
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
        console.log(source, 'source', response.data);// uri: "file:///Users/a91/Library/Developer/CoreSimulator/…ocuments/B7AE02C0-C2FC-4F28-8671-CABF76CAFBC4.jpg"
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
          fileName: response.fileName,
        });
      }
    });
  }

  submit = () => {
    const { navigation } = this.props;
    const formData = new FormData();
    const image = { uri: this.state.avatarSource.uri, type: 'multipart/form-data', name: this.state.fileName };
    formData.append('title', this.state.title);
    formData.append('address', this.state.address);
    formData.append('phone', this.state.phone);
    formData.append('description', this.state.description);
    formData.append('price', this.state.price);
    formData.append('image', image);
    AsyncStorage.getItem('user')
      .then((value) => {
        const user = JSON.parse(value);
        formData.append('userId', user.userId);
        post('/car/addCar', formData)
          .then((res) => {
            Alert.alert('提示', res.msg);
	          navigation.navigate('Home');
          });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TextInput
            style={styles.subone}
            placeholder="标题"
            onChangeText={title => this.setState({ title })}
          />
          <TextInput
            style={styles.subone}
            placeholder="价格"
            onChangeText={price => this.setState({ price })}
          />
          <TextInput
            style={styles.subone}
            placeholder="手机号"
            onChangeText={phone => this.setState({ phone })}
          />
          <TextInput
            style={styles.subone}
            placeholder="地址（精确到街道）"
            onChangeText={address => this.setState({ address })}
          />
          <TextInput
            style={styles.subtwo}
            placeholder="描述"
            onChangeText={description => this.setState({ description })}
          />

          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={[styles.avatar, styles.avatarContainer, { marginBottom: 30 }]}>
              { this.state.avatarSource === null ? <Text>选择照片</Text>
                : (
                  <Image
                    style={styles.avatar}
                    source={this.state.avatarSource}
                  />
                )
              }
            </View>
          </TouchableOpacity>

        </ScrollView>
        <View style={styles.btn}>
          <Button
            title="确认发布"
            onPress={this.submit}
          />
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20,
  },
  subone: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  subtwo: {
    height: 100,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: '#EB235C',
  },

  avatarContainer: {
    marginTop: 20,
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {

    width: 300,
    height: 300,
  },

});
