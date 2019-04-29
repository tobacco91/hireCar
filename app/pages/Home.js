import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View,Button} from 'react-native';
export default class Home extends Component {
	render() {
		const {navigation} = this.props;
		return(
		<View style={styles.container}>
			<Text style={styles.welcome}>home</Text>
			<Button
				title={'mine'}
				onPress={() =>{navigation.navigate('Mine')}}
			/>
		</View>
	
		);
	}
}
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#F5FCFF',
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
  