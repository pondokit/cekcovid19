<template>
	<view class="container" :style="{paddingTop: status_bar_height}">
		<bg-page title="history pengecekan" :navigation="navigation">
			<text>On Development.</text>
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
		padding-top: 30;
		padding-left: 30;
	},
	.icon {
		margin-right: 25;
		font-size: 35;
	}
</style>
