<template>
	<view class="bg">
		<image class="wave" :source="require('../assets/images/wave.png')"/>
		<image class="circles" :source="require('../assets/images/circles.png')"/>
		<image class="menkes" :source="require('../assets/images/menkes.png')" resize-mode="contain"/>
	</view>
</template>

<style scoped>
	.bg {
		top: 0; left: 0; bottom: 0; right: 0;
		position: absolute;
		z-index: -1;
		justify-content: center;
		align-items: center;
	}
	.wave {
		width: 200%;
		height: 400;
		position: absolute;
		top: 0;
	}
	.circles {
		width: 190;
		height: 150;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.menkes {
		width: 120;
		height: 50;
		position: absolute;
		bottom: 30;
		right: 30;
	}
</style>