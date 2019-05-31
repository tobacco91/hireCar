import React, { Component } from 'react';
import {
  FlatList, TouchableHighlight, Image, StyleSheet, Text, View,
} from 'react-native';

const CAR_IMAGE_DEFAULT_URL = 'http://192.168.0.103:8000';
export default class FlatListComponent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <FlatList
        style={styles.flatList}
        data={this.props.data}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#f8f8f8' }} />
        )}
        renderItem={({ item }) =>	(
          <TouchableHighlight
            underlayColor="#f8f8f8"
            onPress={() => { navigation.navigate('ListItem', { code: item.carId }); }}
          >
            <View style={styles.flatListItem}>
              <Text style={styles.flatListItemText}>{item.title}</Text>
              <Image
                style={styles.flatListItemImage}
                source={{ uri: CAR_IMAGE_DEFAULT_URL + item.imagePath }}
              />
            </View>
          </TouchableHighlight>
        )}
      />


    );
  }
}
const styles = StyleSheet.create({

  flatList: {
    marginHorizontal: 10,

  },
  flatListItem: {
    justifyContent: 'space-around',
    padding: 10,
    height: 220,
  },
  flatListItemText: {
    height: 20,
    fontSize: 16,

  },
  flatListItemImage: {
    width: 170,
    height: 170,

  },
});
