<template>
	<view class="container">
		<bg-common />

		<view class="card" :style="{height: screen.height - 150}">
				<image 
					class="title-img" 
					resize-mode="contain" 
					:source="require('../assets/images/img-title.png')" 
					:style="{height: screen.width - 300}"
				/>
				<tx fb ac cb class="title-text">{{ res.title }}</tx>

				<view class="instruction-wrapper">
					<image 
						class="instruction-img" 
						resize-mode="contain" 
						:source="instructionImg"
					/>	
					<tx fb ac cp class="instruction-text">{{ res.instruction }}</tx>
				</view>
				<tx fn aj cb>{{ res.caption }}</tx>
				<view class="button-wrapper">
					<touchable-native-feedback :on-press="() => processResponse()">
						<view class="button-view">
							<tx fn ac cw>{{ res.button }}</tx>
						</view>
					</touchable-native-feedback>
				</view>
		</view>
	</view>
</template>

<script>
import { Dimensions } from 'react-native';

import result from '../data/result';

export default {
	props: ['navigation'],
	data: () => ({
		res: {
			id: '', title: '', instruction: '', caption: '', img: '', button: '' 
		},
	}),
	computed: {
		screen() {
			return Dimensions.get('window');
		},
		instructionImg() {
			switch(this.res.id) {
				case 'res_blue': return require('../assets/images/res_blue.png'); break;
				case 'res_green': return require('../assets/images/res_green.png'); break;
				case 'res_yellow': return require('../assets/images/res_yellow.png'); break;
				case 'res_red': return require('../assets/images/res_red.png'); break;
				default: return null; break;
			}
		}
	},
	methods: {
		processResponse() {

		},
		async getResult() {
			const id = await this.navigation.getParam('id');
			this.res = result.filter(a => a.id == id)[0];
		},
	},
	created() {
		this.getResult();
	}
}
</script>

<style>
.container {
	flex: 1;
	justify-content: center;
	align-items: center;
	padding-horizontal: 30;
}
.card {
	width: 100%;
	background-color: #FFF;
	elevation: 5;
	padding: 30;
	border-radius: 20;
	position: relative;
	top: -15;
	justify-content: space-between;
}
.title-img {
	width: 100%;
}
.title-text {
	font-size: 20;
}
.instruction-text {
	font-size: 18;
}
.instruction-img {
	width: 70;
	height: 70;
	align-self: center;
	margin-bottom: 10;
}
.button-wrapper {
	width: 100%;
}
.button-view {
	background-color: #07BFC2;
	padding: 10;
	margin-top: 15;
	border-radius: 5;
}
</style>
