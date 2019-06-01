import React, { Component } from 'react';

import {
  Image, StyleSheet, Text, View, Button, ScrollView, AsyncStorage, Alert,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import _ from 'lodash';
import { post, get } from '../utils/request';
import { getCode } from '../utils/encryption';


const CAR_IMAGE_DEFAULT_URL = 'http://192.168.0.103:8000';
export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      nowPrice: '',
		 };
  }

  componentDidMount() {
    const { navigation } = this.props;
    get(`/car/getCar?carId=${navigation.state.params.code}`)
      .then((res) => {
        AsyncStorage.getItem('user')
          .then((value) => {
            const user = JSON.parse(value);
            res.data.user = user;
            this.setState({ data: res.data, nowPrice: res.data.stringPrice });
          });
      });
  }

 collect = () => {
   const { navigation } = this.props;
   AsyncStorage.getItem('user')
     .then((value) => {
       const user = JSON.parse(value);
       post('/car/collectCar', { carId: navigation.state.params.code, userId: user.userId })
         .then((res) => {
           Alert.alert('提示', res.msg);
         });
     });
 }

 buy = () => {
   const { navigation } = this.props;
   AsyncStorage.getItem('user')
     .then((value) => {
       const user = JSON.parse(value);
       post('/car/hireCar', { carId: navigation.state.params.code, userId: user.userId })
         .then((res) => {
           Alert.alert('提示', res.msg);
         });
     });
 }

 check = () => {
   const code = getCode(this.state.nowPrice);
   console.log('nowprice', this.state.nowPrice, 'nowcode', code, 'beforecode', this.state.data.code);
   if (code === this.state.data.code) {
     Alert.alert('提示', '价格未被篡改');
   } else {
     Alert.alert('提示', '价格已被篡改');
   }
 }

 render() {
   const { data } = this.state;
   return (
     <View style={styles.wrap}>
       <ScrollView>
         <View style={styles.details}>
           <View style={styles.detailsSubone}>
             <Image
               source={{ uri: CAR_IMAGE_DEFAULT_URL + _.get(data, 'user.avatarPath') }}
               style={styles.detailsSuboneAvatar}
             />
             <Text style={styles.detailsSuboneName}>{_.get(data, 'user.name')}</Text>
           </View>
           <Text style={styles.detailsTitle}>{_.get(data, 'title')}</Text>
           <View style={styles.detailsPrice}>
             <Text style={{ fontSize: 16 }}>价格：</Text>
             <TextInput
               style={styles.detailsPriceInput}
               onChangeText={(nowPrice) => { this.setState({ nowPrice }); }}
             >
               {_.get(data, 'stringPrice')}
             </TextInput>
             <View style={styles.detailsPriceButton}>
               <Button
                 color="#fff"
                 title="价格完整性验证"
                 onPress={this.check}
               />
             </View>
           </View>
           <Text style={styles.detailsPrice}>
手机号：
             {_.get(data, 'phone')}
           </Text>
           <Text style={styles.detailsPrice}>
地址：
             {_.get(data, 'address')}
           </Text>
           <Text
             style={styles.detailsPrice}
             numberOfLine={20}
           >
             描述：
             {_.get(data, 'description')}
           </Text>
           <Image
             source={{ uri: CAR_IMAGE_DEFAULT_URL + _.get(data, 'imagePath') }}
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
             title="租赁"
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    fontSize: 16,

  },
  detailsPriceInput: {
    backgroundColor: '#f7f7f7',
    width: 80,
    height: 40,
  },
  detailsPriceButton: {
    marginLeft: 40,
    backgroundColor: '#F5D33D',

  },
  detailsImage: {
    width: 240,
    height: 240,
    marginTop: 20,
    alignItems: 'center',
  },
  action: {
    height: 40,
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
