<template>
	<view class="container" >
			<view class="viewImg" :style="{'background-image': 'url(' + require('../assets/bg.png') + ');'}">
				<image
					:source="require('../assets/covidlo.png')"
					class="img"
				/>
			</view>
			<text class="subtitle">self check up</text>
			<text class="title">covid-19</text>
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
		font-weight: bold;
		text-transform: uppercase ;
	},
	.title {
		font-size: 48;
		font-weight: bold;
		color: #009C9F;
		text-transform: uppercase ;
	}
</style>
