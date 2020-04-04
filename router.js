import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';
import Menu from './screens/Menu';
import History from './screens/History';
import CheckMandiri from './screens/CheckMandiri';
import ResultMandiri from './screens/ResultMandiri';

const StackNavigator = createStackNavigator(
	{
    	Splash: Splash,
		Login: Login,
		Home: Home,
		Menu: Menu,
		CheckMandiri: CheckMandiri,
		ResultMandiri: ResultMandiri,
	},
	{
		initialRouteName: 'Splash',
		headerMode: 'none',
	}
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
