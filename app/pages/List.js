import React, { Component } from 'react';
import { SearchBar } from '@ant-design/react-native';
import {
  StyleSheet, View,
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
      get(`/car/searchCar?str=${navigation.state.params.str}`)
        .then((res) => {
          this.setState({ data: res.data, searchValue: navigation.state.params.str });
        });
    } else {
      get('/user/typeList', { type: mapping[navigation.state.params.page], userId: '填写' })
        .then((res) => {
          this.setState({ data: res.data });
        });
    }
  }

	submit = (value) => {
	  get(`/car/searchCar?str=${value}`)
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
	              value={this.state.searchValue}
	              placeholder="Search"
	              cancelText=" "
    onSubmit={this.submit}
    onChange={(value) => { this.setState({ searchValue: value }); }}
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
