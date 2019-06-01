import React, { Component } from 'react';

import {
  StyleSheet, View, AsyncStorage,
} from 'react-native';
import FlatListComponent from '../components/FlatListComponent';
import { get } from '../utils/request';


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
		 };
  }

  componentDidMount() {
    const { navigation } = this.props;
    AsyncStorage.getItem('user')
      .then((value) => {
        const user = JSON.parse(value);
        get(`/user/typeList?type=${navigation.state.params.page}&userId=${user.userId}`)
          .then((res) => {
            this.setState({ data: res.data });
          });
      });
  }


  render() {
	  return (
  <View style={styles.container}>
        <FlatListComponent
      data={this.state.data}
      navigation={this.props.navigation}
    />
      </View>

	  );
  }
}
const styles = StyleSheet.create({
  container: {
	  flex: 1,
  },

});
