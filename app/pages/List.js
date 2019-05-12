import React, { Component } from 'react';
import { SearchBar, WhiteSpace } from '@ant-design/react-native';
import {
  FlatList, Image, StyleSheet, Text, View, Button,
} from 'react-native';
import FlatListComponent from '../components/FlatListComponent';
import { get } from '../utils/request';

const mapping = {
  collect: 'collect',
  myRelease: 'release',
  buy: 'buy',
};
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      data: [],
		 };
  }

  componentDidMount() {
    const { navigation } = this.props;
    if (navigation.state.params.page === 'search') {
      const data = new FormData();
      data.append('str', navigation.state.params.str);
      get('/car/searchCar', data)
        .then((res) => {
          this.setState({ data: res.data });
        });
    } else {
      get('/user/typeList', { type: mapping[navigation.state.params.page], userId: '填写' })
        .then((res) => {
          this.setState({ data: res.data });
        });
    }


    // this.setState({
    //   data: [
    //     { key: 'Devin', url: '' },
    //     { key: 'Jackson' },
    //     { key: 'James' },
    //     { key: 'Joel' },
    //     { key: 'John' },
    //     { key: 'Jillian' },
    //     { key: 'Jimmy' },
    //     { key: 'Julie5' },
    //     { key: 'John4' },
    //     { key: 'Jillian3' },
    //     { key: 'Jimmy1' },
    //     { key: 'Julie2' },
    //   ],
    // });
  }

	submit = (value) => {
	  const data = new FormData();
	  data.append('str', value);
	  get('/car/searchCar', data)
	    .then((res) => {
	      this.setState({ data: res.data });
	    });
	}

	render() {
	  return (
	    <View style={styles.container}>
    {
	        this.props.navigation.state.params.page === 'search'
	          ? (
	            <SearchBar
	              placeholder="Search"
	              cancelText=" "
	              onSubmit={this.submit}
  />
	          )
	          : ''
	      }


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
