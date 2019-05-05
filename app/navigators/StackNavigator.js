import React from 'react';
import Home from '../pages/Home';
import Mine from '../pages/Mine';
import Release from '../pages/Release';
import List from '../pages/List';
import ListItem from '../pages/ListItem';

import AppBottomTabNavigator from './BottomTabNavigator';
import { createStackNavigator } from 'react-navigation';

const stackNavigator = createStackNavigator({
    Home: {
        screen: AppBottomTabNavigator,
        // navigationOptions: {
        //     header:null,
        // }
    },
    Release: {
        screen: Release,
       
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            title: 'lalalal'
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
    }
},{
    initialRouteName: 'Home',
})


export default stackNavigator;