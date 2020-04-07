<template>
	<view class="container" :style="{paddingTop: status_bar_height}">
		<bg-page />

		<view class="page-header" :style="{width: screen.width}">
			 <ionicons name="ios-arrow-round-back" class="icon" color="#fff" />
			 <tx fb cw hs tc> artikel dan tips <tx>
		</view>

		<view class="page-content" :style="{width: screen.width}">
			<view class="listTitle center mb-50">
				<tx tc hm fb >tips tips lawan <tx tu>covid-19</tx> </tx>
				<tx bd class="mt-10" > Pilih sesuai hasil cek anda, Jika belum cek, Silakan </tx>
				<tx bd cp class="mt-10" > cek sekarang. </tx>
			</view>

			<view class="list mt-20">
				<tx tc fb> kenali virus corona</tx>
				<ionicons name="ios-arrow-round-forward" class="l-icon" color="#D8D8D8" />
			</view>
			<view class="list mt-20">
				<tx tc fb> sehat</tx>
				<ionicons name="ios-arrow-round-forward" class="l-icon" color="#D8D8D8" />
			</view>
			<view class="list mt-20">
				<tx tc fb> terindikasi</tx>
				<ionicons name="ios-arrow-round-forward" class="l-icon" color="#D8D8D8" />
			</view>
			<view class="list mt-20">
				<tx tc fb> positif</tx>
				<ionicons name="ios-arrow-round-forward" class="l-icon" color="#D8D8D8" />
			</view>
		</view>
	</view>
</template>

<script>
	import { Dimensions, StatusBar } from 'react-native';
	import { Ionicons } from "@expo/vector-icons";

	export default {
		components: {
  			Ionicons
  		},
		computed: {
			status_bar_height() {
				return  StatusBar.currentHeight || 0 ;
			},
			screen() {
				return Dimensions.get('window');
			}
		},
	}
</script>

<style>
	.container {
		flex: 1;
	},
	.page-header {
		height: 90;
		padding-left: 30;
		padding-top: 30;
		padding-bottom: 20;
		flex-direction: row;
		align-items: center;
	},
	.page-content {
		height: 100%;
		padding-top: 60;
		padding-left: 30;
		padding-right: 30;
	},
	.icon {
		margin-right: 25;
		font-size: 35;
	},
	.mt-10 {
		margin-top: 10;
	},
	.mt-20 {
		margin-top: 20;
	},
	.mb-50 {
		margin-bottom: 50;
	},
	.center {
		justify-content: center;
		align-items: center;
	},
	.list {
		width: 100%;
		height: 65;
		flex-direction: row;
		elevation: 5;
		background-color: #fff;
		border-radius: 	11;
		align-items: center;
		justify-content: space-between;
		padding-left: 30;
		padding-right: 30;
	},
	.l-icon {
		font-size: 24;
	}
</style>
