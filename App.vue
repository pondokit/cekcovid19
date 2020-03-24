<template>
  <app-navigator></app-navigator>
</template>

<script>
	import Vue from 'vue-native-core';
	import AsyncStorage from 'react-native';
	import axios from 'axios';

	import AppNavigator from './router';
	import Store from './store';

	Vue.prototype.$axios = axios;
	Vue.prototype.$store = Store;
	Vue.prototype.$storage = AsyncStorage;

	export default {
		components: {AppNavigator}
	}
</script>
