import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Home from '../pages/Home';
import Mine from '../pages/Mine';
import Release from '../pages/Release';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const bottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => (
              <Ionicons name="md-home"
size={25}
color={tintColor} />
      ),
    },
  },
  Release: {
    screen: Release,
    navigationOptions: {
      tabBarLabel: '发布',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name="md-add-circle"
size={25}
color={tintColor} />
      ),
    },
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons name="ios-person"
size={25}
color={tintColor} />
      ),
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#000' : '#fff',
  },
});


export default bottomTabNavigator;
