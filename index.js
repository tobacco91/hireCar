/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { createAppContainer } from 'react-navigation';
import AppStackNavigator from './app/navigators/StackNavigator';
import { name as appName } from './app.json';
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
 
console.disableYellowBox = true // 关闭全部黄色警告


const AppStackNavigatorContainer = createAppContainer(AppStackNavigator);
AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
