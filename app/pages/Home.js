import React, { Component } from 'react';
import { SearchBar, WhiteSpace } from '@ant-design/react-native';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import FlatListComponent from '../components/FlatListComponent';

export default class Home extends Component {
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
        { key: 'JacksonJacksonJacksonJacksonJacksonJacksonJacksonJacksonJacksonJacksonJacksonJacksonJacksonJackson' },
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
	  const { navigation } = this.props;
	  return (
  <View style={styles.container}>
  <SearchBar
  placeholder="Search"
	        cancelText=" "
	        onSubmit={this.submit}
	      />
  <WhiteSpace />
  <Text style={styles.title}>为您推荐</Text>
  <FlatListComponent
  data={this.state.data}
	        navigation={this.props.navigation}
	      />
	      <Text style={styles.welcome}>home</Text>
	      <Button
	        title="mine"
      onPress={() => { navigation.navigate('Mine'); }}
    />
  <Button
	        title="List"
  onPress={() => { navigation.navigate('List'); }}
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
