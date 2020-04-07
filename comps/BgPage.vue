<template>
	<view class="header">
		<image class="bg-header" :source="require('../assets/images/bg-header.png')"/>
		<view class="content" :style="{width: screen.width, height: screen.height - 90}"></view>
	</view>
</template>

<script>
	import { Dimensions} from 'react-native';

	export default {
		computed: {
			screen() {
				return Dimensions.get('window');
			}
		},
	}
</script>

<style scoped>
	.header {
		top: 0; left: 0; bottom: 0; right: 0;
		position: absolute;
		z-index: -1;
		justify-content: center;
		align-items: center;
	},
	.bg-header {
		top: 0;
		width: 100%;
		height: 150;
		position: absolute;
	},
	.content {
		bottom: 0;
		position: absolute;
		background-color: #FBFBFB;
		border-top-left-radius: 40;
		border-top-right-radius: 40;
	}
</style>
