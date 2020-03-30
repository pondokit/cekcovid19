import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';
import History from './screens/History';

const StackNavigator = createStackNavigator(
	{
    Splash: Splash,
		Login: Login,
		Home: Home,
		History: History
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none',
	}
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
