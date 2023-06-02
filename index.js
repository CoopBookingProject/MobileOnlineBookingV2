/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import mainscreens from './src/mainscreens'
import loadingscrren from './src/screens/loadingscrren'

AppRegistry.registerComponent(appName, () => mainscreens);
