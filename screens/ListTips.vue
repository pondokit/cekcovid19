<template>
	<view class="container" :style="{paddingTop: status_bar_height}">
		<bg-page title="artikel dan tips" :navigation="navigation">

			<view class="listTitle center mb-50">
				<tx tc hm fb >tips tips lawan <tx tu>covid-19</tx> </tx>
				<tx fn bd class="mt-10" > Pilih sesuai hasil cek anda. </tx>
				<touchable-opacity :on-press="() => navigation.navigate('CheckMandiri')">
					<tx fn bd cp class="mt-10" > CEK SEKARANG </tx>
				</touchable-opacity>
			</view>

			<touchable-native-feedback v-for="m in menu" :on-press="() => navigation.navigate('Tips')">
				<view class="list mt-20">
					<tx tc fb>{{ m }}</tx>
					<ionicons name="ios-arrow-round-forward" class="l-icon" color="#D8D8D8" />
				</view>
			</touchable-native-feedback>

		</bg-page>
	</view>
</template>

<script>
	import { Dimensions, StatusBar } from 'react-native';
	import { Ionicons } from "@expo/vector-icons";

	export default {
		props: ['navigation'],
		components: {
  			Ionicons
  		},
  		data: () => ({
  			menu: ['kenali virus corona', 'sehat', 'terindikasi', 'positif']
  		}),
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
	}
	.mt-10 {
		margin-top: 10;
	}
	.mt-20 {
		margin-top: 20;
	}
	.mb-50 {
		margin-bottom: 50;
	}
	.center {
		justify-content: center;
		align-items: center;
	}
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
	}
	.l-icon {
		font-size: 24;
	}
</style>
