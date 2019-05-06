import React, { Component } from 'react';
import { SearchBar, WhiteSpace } from '@ant-design/react-native';
import {
  FlatList, Image, StyleSheet, Text, View, Button,
} from 'react-native';
import FlatListComponent from '../components/FlatListComponent';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      data: [],
		 };
  }

  componentDidMount() {
    this.setState({
      data: [
        { key: 'Devin', url: '' },
        { key: 'Jackson' },
        { key: 'James' },
        { key: 'Joel' },
        { key: 'John' },
        { key: 'Jillian' },
        { key: 'Jimmy' },
        { key: 'Julie5' },
        { key: 'John4' },
        { key: 'Jillian3' },
        { key: 'Jimmy1' },
        { key: 'Julie2' },
      ],
    });
  }

	submit = (value) => {
	  console.log(value);
	}

	render() {
	  return (
	    <View style={styles.container}>
    <SearchBar
	        placeholder="Search"
    cancelText=" "
    onSubmit={this.submit}
  />
    <WhiteSpace />
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
