import React from 'react';
import Home from '../pages/Home';
import Mine from '../pages/Mine';
import Release from '../pages/Release';
import List from '../pages/List';
import PersonList from '../pages/PersonList';
import ListItem from '../pages/ListItem';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AppBottomTabNavigator from './BottomTabNavigator';
import { createStackNavigator } from 'react-navigation';
const mapping = {
  collect: '收藏列表',
  release: '发布列表',
  buy: '租赁列表'
}
const stackNavigator = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
          title: '登录'
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
          title: '注册'
      }
    },
    Home: {
        screen: AppBottomTabNavigator,
        navigationOptions: ({navigation}) => ({
          headerLeft: null,
      })
    },
    Release: {
        screen: Release,
        navigationOptions: {
          title: '发布'
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            title: '我的'
        }
    },
    List: {
        screen: List,
        navigationOptions: {
            title: '搜索'
        }
    },
    ListItem: {
        screen: ListItem,
        navigationOptions: {
            title: '详情'
        }
    },
    PersonList: {
      screen: PersonList,
      navigationOptions: ({navigation}) => ({
        title: mapping[navigation.state.params.page]
      })
  },
},{
    initialRouteName: 'Login',
})


export default stackNavigator;