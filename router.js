import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import Home from './screens/Home';

const StackNavigator = createStackNavigator(
	{
		Home: Home
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none',
	}
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;