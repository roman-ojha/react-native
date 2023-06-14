/*
    -> .buckconfig:
        -> this is use for customization it specify
    -> metro.config.js:
        -> include the default metro config that run when the app run
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
