/*
    -> There are two type of data in react native:
        1) State
            -> Mutable
        2) Props
            -> Immutable

    -> Two way to create Page:
        1) Class Component
        2) Hook Function
            -> function component
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
