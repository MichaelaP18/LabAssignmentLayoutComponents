/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import ToDoForm from './src/ToDoForm';

AppRegistry.registerComponent(appName, () => ToDoForm);
