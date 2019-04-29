import React from 'react';
import Home from '../pages/Home';
import Mine from '../pages/Mine';
import Release from '../pages/Release';
import AppBottomTabNavigator from './BottomTabNavigator';
import { createStackNavigator } from 'react-navigation';
const stackNavigator = createStackNavigator({
    Home: {
        screen: AppBottomTabNavigator
    },
    Release: {
        screen: Release,
        // navigationOptions: {
        //     title: '个人信息'
        // }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            title: '个人信息'
        }
    },
},{
    initialRouteName: 'Home',
})


export default stackNavigator;