<template>
	<view class="container" >
		<bg-common />
		
		<view class="viewImg" :style="{'background-image': 'url(' + require('../assets/images/wave.png') + ');'}">
			<image
				:source="require('../assets/images/logo.png')"
				class="img"
			/>
		</view>
		<tx fb ac cb class="subtitle">self check up</tx>
		<tx fb ac cp class="title">covid-19</tx>
	</view>
</template>

<script>
	export default {}
</script>

<style>
	.container {
		flex: 1;
		justify-content: center;
		align-items: center;
	},
	.viewImg {
		margin-bottom: 40;
	},
	.img {
		width: 128;
		height: 118;
	},
	.subtitle {
		font-size: 18;
		text-transform: uppercase ;
	},
	.title {
		font-size: 48;
		text-transform: uppercase ;
	}
</style>
