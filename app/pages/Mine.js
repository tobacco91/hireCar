import React, { Component } from 'react';
import { 
Image, StyleSheet, Text, View, Button
 } from 'react-native';
 
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Mine extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerSubone}>
          <Image
            source={{ uri: 'https://note.youdao.com/yws/api/personal/file/WEB4baf465904166e49f2da2ee8c13bf3d3?method=download&shareKey=1a99d4962e7d6bcf0a337a88a06df171' }}
            style={styles.detailsSuboneAvatar}
          />
              <Text style={styles.detailsSuboneName}>昵称</Text>
        </View>
        <View style={{ height: 1, backgroundColor: '#f7f7f7' }} />
            <Text
style={styles.containerSubtwo}
          onPress={() => { navigation.navigate('PersonList', { page: 'collect' }); }}
        >
            我收藏的
          <Ionicons name="ios-arrow-forward"
size={18} />
           </Text>
            <View style={{ height: 1, backgroundColor: '#f7f7f7' }} />
        <Text
style={styles.containerSubtwo}
          onPress={() => { navigation.navigate('PersonList', { page: 'buy' }); }}
        >
            我购买的
          <Ionicons name="ios-arrow-forward"
size={18} />
        </Text>
            <View style={{ height: 1, backgroundColor: '#f7f7f7' }} />
        <Text
style={styles.containerSubtwo}
          onPress={() => { navigation.navigate('PersonList', { page: 'myRelease' }); }}
        >
             我发布的
          <Ionicons name="ios-arrow-forward"
size={18} />
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
    marginTop: 200,
    marginLeft: 60,
    width: 200,
    backgroundColor: '#EB235C',
  },
});
