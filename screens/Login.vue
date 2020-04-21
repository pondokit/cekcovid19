<template>
	<view class="container" :style="{paddingTop: status_bar_height}">
		<bg-common />

		<view class="card" :style="{height: screen.height - 150}">
			<image 
				class="title-img" 
				resize-mode="contain" 
				:source="require('../assets/images/img-title.png')" 
				:style="{height: screen.width - 300}"
			/>

			<view>
				<tx fn al cb class="require">Username/Email</tx>
				<text-input
					class="text-input"
					placeholder="Masukkan username atau Email"
				 />
			</view>
			<view>
				<tx fn al cb class="require">Provinsi</tx>
				<text-input
					class="text-input"
					placeholder="Masukkan Provinsi"
				 />
			</view>
			<view>
				<tx fn al cb class="require">No Telepon</tx>
				<text-input
					class="text-input"
					placeholder="Masukkan No Telepon"
				 />
			</view>
			<view>
				<tx fn al cb>Kenapa harus mengisi data ?</tx>
				<view class="confirm">
					<view class="checkbox"></view>
					<tx fn al cb>anda setuju</tx>
				</view>
			</view>
			
			<touchable-native-feedback :on-press="() => navigation.navigate('Home')">
				<view class="button-view">
					<tx fn ac cw>Submit</tx>
				</view>
			</touchable-native-feedback>
		</view>

</template>

<script>
	import { StatusBar, Dimensions } from 'react-native';

	export default {
		props: ['navigation'],
		data: () => ({
			text: ''
		}),
		computed: {
			status_bar_height() {
				return  StatusBar.currentHeight || 0 ;
			},
			screen() {
				return Dimensions.get('window');
			},
		},
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
	.button-view {
		width: 100%;
		background-color: #07BFC2;
		padding: 10;
		margin-top: 15;
		border-radius: 5;
	}

	.text-input {
		height: 35;
		width: 100%;
		background-color: #F7F7F7;
		border-radius: 6;
		padding-left: 10;
	}
	.require {
		margin-bottom: 7;
	}
	.confirm {
		margin-top: 10;
		flex-direction: row;
		align-items: center;
	}
	.checkbox {
		width: 18;
		height: 18;
		border-width: 1;
		border-color: #484a48;
		margin-right: 10;
		border-radius: 3;
	}
</style>
