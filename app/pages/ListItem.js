import React, { Component } from 'react';

import {
  Image, StyleSheet, Text, View, Button, ScrollView,
} from 'react-native';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
		 };
  }

  componentDidMount() {
    
  }

 collect = () => {
  alert('收藏成功');
 }

 buy = () => {
  alert('购买成功');
 }

 render() {
   return (
     <View style={styles.wrap}>
       <ScrollView>
         <View style={styles.details}>
           <View style={styles.detailsSubone}>
             <Image
               source={{ uri: 'https://note.youdao.com/yws/api/personal/file/WEB4baf465904166e49f2da2ee8c13bf3d3?method=download&shareKey=1a99d4962e7d6bcf0a337a88a06df171' }}
               style={styles.detailsSuboneAvatar}
             />
             <Text style={styles.detailsSuboneName}>昵称</Text>
           </View>
           <Text style={styles.detailsTitle}>本车出租</Text>
           <Text style={styles.detailsPrice}>价格：$23</Text>
           <Text style={styles.detailsPrice}>手机号：18875140931</Text>
           <Text style={styles.detailsPrice}>地址：浙江绍兴柯桥</Text>
           <Text
             style={styles.detailsPrice}
             numberOfLine={20}
           >
介绍
           </Text>
           <Image
             source={{ uri: 'https://note.youdao.com/yws/api/personal/file/WEB4baf465904166e49f2da2ee8c13bf3d3?method=download&shareKey=1a99d4962e7d6bcf0a337a88a06df171' }}
             style={styles.detailsImage}
           />
           <Image
             source={{ uri: 'https://note.youdao.com/yws/api/personal/file/WEB4baf465904166e49f2da2ee8c13bf3d3?method=download&shareKey=1a99d4962e7d6bcf0a337a88a06df171' }}
             style={styles.detailsImage}
           />


         </View>
       </ScrollView>
       <View style={styles.action}>
         <View style={styles.actionCollect}>
           <Button
             title="收藏"
             onPress={this.collect}
           />
         </View>
         <View style={styles.actionBuy}>
           <Button
             title="购买"
             onPress={this.buy}
           />
         </View>
       </View>

     </View>

   );
 }
}
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    position: 'relative',
  },
  details: {
    // flex: 14,
    margin: 20,
  },
  detailsSubone: {
    flexDirection: 'row',
    height: 40,
  },
  detailsSuboneAvatar: {
    height: 40,
    width: 40,
  },
  detailsSuboneName: {
    height: 40,
    marginLeft: 20,
    lineHeight: 40,
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsTitle: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  detailsPrice: {
    marginTop: 20,
    fontSize: 16,

  },
  detailsImage: {
    width: 240,
    height: 240,
    marginTop: 20,
    alignItems: 'center',
  },
  action: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  actionCollect: {
    backgroundColor: '#F5D33D',
    flex: 1,

  },
  actionBuy: {
    flex: 1,
    backgroundColor: '#EB235C',
  },
});
