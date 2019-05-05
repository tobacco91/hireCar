import React, {Component} from 'react';
import {FlatList,TouchableHighlight, Image,StyleSheet, Text, View} from 'react-native';

export default class FlatListComponent extends Component {
	
	render() {
        const {navigation} = this.props;
		return(
			<FlatList
				style={styles.flatList}
					data={this.props.data}
					ItemSeparatorComponent={() => 
                        (
                        <View style={{height:1,backgroundColor:'#f8f8f8'}}/>
                        )}
          renderItem={({item}) =>	(
                <TouchableHighlight underlayColor={"#f8f8f8"} onPress={()=>{navigation.navigate('ListItem',{code:'我也很绝望啊'})}}>
						<View style={styles.flatListItem}>
							<Text style={styles.flatListItemText}>{item.key}</Text>
							<Image style={styles.flatListItemImage} source={{uri:'https://note.youdao.com/yws/api/personal/file/WEB4baf465904166e49f2da2ee8c13bf3d3?method=download&shareKey=1a99d4962e7d6bcf0a337a88a06df171'}} />	
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
		// backgroundColor: '#F5FCFF',
	},
	flatListItem: {
		justifyContent: 'space-around',
		padding: 10,
		height: 220,
	},
	flatListItemText: {
		height: 20,
		fontSize: 16,
		backgroundColor: 'red'
	},
	flatListItemImage: {
		width: 170,
		height: 170,

	}
});
  