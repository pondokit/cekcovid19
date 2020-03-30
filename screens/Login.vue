<template>
	<view class="container" :style="{paddingTop: status_bar_height}">
		<view class="form">
			<image
				:source="require('../assets/SCU.png')"
				class="img"
			/>
			<view class="input">
				<text class="require">Username/Email</text>
				<text-input
					 class="text-input"
					 v-model="text"
					 placeholder="Masukkan username atau Email"
				 />
			</view>
			<view class="input">
				<text class="require">Provinsi</text>
				<text-input
					 class="text-input"
					 v-model="text"
					 placeholder="Masukkan Provinsi"
				 />
			</view>
			<view class="input">
				<text class="require">No Telepon</text>
				<text-input
					 class="text-input"
					 v-model="text"
					 placeholder="Masukkan No Telepon"
				 />
			</styleview>
			<view class="notice">
				<text>Kenapa harus mengisi data ?</text>
				<view class="confirm">
					<view class="checkbox"></view>
					<text>anda setuju</text>
				</view>
			</view>
			<touchable-opacity class="submit">
	    	<text class="login">Login</text>
	    </touchable-opacity>
		</view>
	</view>
</template>

<script>
	import { StatusBar } from 'react-native';

	export default {
		data: function() {
			 return {
					 text: ''
			 };
		},
		computed: {
			status_bar_height() {
				return  StatusBar.currentHeight || 0 ;
			},
		},
	}
</script>

<style>
	.container {
		flex: 1;
		justify-content: center;
		align-items: center;
	},
	.form {
		position: absolute;
		width: 300;
		height: 510;
		padding-top: 43;
		padding-bottom: 43;
		padding-left: 28;
		padding-right: 26;
		elevation:1;
		shadowColor: red;
		shadowOpacity: 0.01;
		shadowRadius: 1;
		border-radius: 16;
		align-items: center;
	},
	.img {
		margin-bottom: 40;
	},
	.input {
		align-self: flex-start;
		margin-bottom: 20;
	},
	.text-input {
		height: 35;
		width: 245;
		background-color: #F7F7F7;
		border-radius: 6;
		padding-left: 10;
	},
	.require {
		margin-bottom: 7;
	},
	.notice {
		margin-top: 15;
	},
	.confirm {
		margin-top: 10;
		flex-direction: row;
		align-items: center;
	},
	.checkbox {
		width: 18;
		height: 18;
		border-width: 1;
		border-color: #484a48;
		margin-right: 10;
		border-radius: 3;
	},
	.submit {
		width: 247;
		height: 40;
		margin-top: 20;
		border-radius: 9;
		align-items: center;
		justify-content: center;
		background-color: #009C9F;
	},
	.login {
		color: #fff;
		font-size: 16;
	}
</style>
