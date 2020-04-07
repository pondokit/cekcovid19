<template>
	<view class="container">
		<image class="bg-header" :source="require('../assets/images/bg-header.png')"/>

		<view class="navbar">
			<touchable-opacity :on-press="() => navigation.goBack()">
				<ionicons name="ios-arrow-round-back" class="navbar-icon" color="#fff" />
			</touchable-opacity>
			<tx fb cw hs tc>{{ title }}</tx>
		</view>

		<view class="content" :style="{height: screen.height - 90}">
			<scroll-view class="scroll">
				<slot />
				<view class="bottom-space"/>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import { Dimensions } from 'react-native';
	import { Ionicons } from "@expo/vector-icons";

	export default {
		props: ['navigation', 'title'],
		components: { Ionicons },
		computed: {
			screen() {
				return Dimensions.get('window');
			}
		},
	}
</script>

<style scoped>
	.container {
		flex: 1;
	}
	.bg-header {
		width: 100%;
		height: 150;
		position: absolute;
	}
	.navbar {
		position: absolute;
		top: 0; left: 0; right: 0;
		padding-horizontal: 30;
		padding-top: 40;
		flex-direction: row;
		align-items: center;
	}
	.navbar-icon {
		margin-right: 25;
		font-size: 35;
	},
	.content {
		bottom: 0; left: 0; right: 0;
		position: absolute;
		background-color: #FBFBFB;
		border-top-left-radius: 40;
		border-top-right-radius: 40;
	}
	.scroll {
		padding-horizontal: 30;
		margin-top: 40;
	}
	.bottom-space {
		padding: 30;
	}
</style>
