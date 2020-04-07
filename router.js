import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';
import Menu from './screens/Menu';
import History from './screens/History';
import ListTips from './screens/ListTips';
import Tips from './screens/Tips';
import Hospital from './screens/Hospital';
import CheckMandiri from './screens/CheckMandiri';
import ResultMandiri from './screens/ResultMandiri';

const StackNavigator = createStackNavigator(
	{
    	Splash: Splash,
		Login: Login,
		Home: Home,
		Menu: Menu,
		History: History,
		ListTips: ListTips,
		Tips: Tips,
		Hospital: Hospital,
		CheckMandiri: CheckMandiri,
		ResultMandiri: ResultMandiri,
	},
	{
		initialRouteName: 'Login',
		headerMode: 'none',
	}
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
