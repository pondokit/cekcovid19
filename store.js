import Vue from 'vue-native-core';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	test: 'lol'
};

const mutations = {
	CHANGE_TEST(state, arg) {
		state.test = arg;
	}
}

const actions = {
	changeTest(context, payload) {
		context.commit('CHANGE_TEST', payload);
	}
}

const getters = {
	is_lol(state) {
		return state.test == 'lol';
	}
}

const store = new Vuex.Store({
	state: state,
	mutations: mutations,
	actions: actions,
	getters: getters,
});

export default store;