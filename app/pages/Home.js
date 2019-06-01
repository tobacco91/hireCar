import React, { Component } from 'react';
import { SearchBar, WhiteSpace } from '@ant-design/react-native';
import {
  StyleSheet, Text, View,
} from 'react-native';
import FlatListComponent from '../components/FlatListComponent';
import { get } from '../utils/request';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchValue: '',
      data: [],
		 };
  }

  componentDidMount() {
    get('/car/hotList')
      .then((res) => {
        this.setState({ data: res.data });
      });
  }

	submit = (value) => {
	  const { navigation } = this.props;
	  navigation.navigate('List', { str: value, page: 'search' });

	}

	render() {
	  const { navigation } = this.props;
	  return (
	    <View style={styles.container}>
    <SearchBar
	        placeholder="Search"
    cancelText=" "
    onSubmit={this.submit}
  />
    <WhiteSpace />
    <Text style={styles.title}>热门车型</Text>
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
  title: {
    margin: 10,
    fontSize: 25,
  },

  welcome: {
	  fontSize: 20,
	  textAlign: 'center',
	  margin: 10,
  },
  instructions: {
	  textAlign: 'center',
	  color: '#333333',
	  marginBottom: 5,
  },
});
