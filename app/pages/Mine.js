import React, { Component } from 'react';
import {
  Image, StyleSheet, Text, View, AsyncStorage,Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

const CAR_IMAGE_DEFAULT_URL = 'http://192.168.0.103:8000';
export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
		 };
  }

  componentDidMount() {
    AsyncStorage.getItem('user')
      .then((value) => {
        const user = JSON.parse(value);
        this.setState({ data: user });
      });
  }

  render() {
    const { navigation } = this.props;
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containerSubone}>
          <Image
            source={{ uri: CAR_IMAGE_DEFAULT_URL + _.get(data, 'avatarPath') }}
            style={styles.detailsSuboneAvatar}
          />
          <Text style={styles.detailsSuboneName}>{_.get(data, 'name')}</Text>
        </View>
        <View style={{ height: 1, backgroundColor: '#f7f7f7' }} />
        <Text
          style={styles.containerSubtwo}
          onPress={() => { navigation.navigate('PersonList', { page: 'collect' }); }}
        >
            我收藏的
          <Ionicons
            name="ios-arrow-forward"
            size={18}
          />
        </Text>
        <View style={{ height: 1, backgroundColor: '#f7f7f7' }} />
        <Text
          style={styles.containerSubtwo}
          onPress={() => { navigation.navigate('PersonList', { page: 'buy' }); }}
        >
            我租赁的
          <Ionicons
            name="ios-arrow-forward"
            size={18}
          />
        </Text>
        <View style={{ height: 1, backgroundColor: '#f7f7f7' }} />
        <Text
          style={styles.containerSubtwo}
          onPress={() => { navigation.navigate('PersonList', { page: 'release' }); }}
        >
             我发布的
          <Ionicons
            name="ios-arrow-forward"
            size={18}
          />
        </Text>
        <View style={{ height: 1, backgroundColor: '#f7f7f7' }} />
        <View style={styles.btn}>
          <Button
            title="退出登录"
            onPress={() => { navigation.navigate('Login'); }}
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
    paddingTop: 40,
  },
  containerSubone: {
    flexDirection: 'row',
    // height: 40,
    marginBottom: 100,
  },
  detailsSuboneAvatar: {
    height: 80,
    width: 80,
  },
  detailsSuboneName: {
    height: 80,
    marginLeft: 20,
    lineHeight: 80,
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerSubtwo: {
    height: 50,
    lineHeight: 50,
    fontSize: 18,

  },
  btn: {
    marginTop: 100,
    marginLeft: 60,
    width: 200,
    height: 40,
    backgroundColor: '#EB235C',
  },
});
