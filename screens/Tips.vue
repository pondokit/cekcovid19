<template>
	<view class="container" :style="{paddingTop: status_bar_height}">
		<bg-page />

		<view class="page-header" :style="{width: screen.width}">
			 <ionicons name="ios-arrow-round-back" class="icon" color="#fff" />
			 <tx fb cw hs tc> artikel dan tips <tx>
		</view>

		<scroll-view class="page-content" :style="{width: screen.width}">
			<tx tc fb tl class="mb-30 center">Kenali virus corona</tx>
			<tx tc fn tb aj class="artikel">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem metus, tincidunt vitae congue vel, tempor vel ex. Cras nec interdum mauris. Donec justo tortor, tincidunt bibendum purus convallis, elementum vehicula massa. Maecenas mattis tortor at metus posuere, a pretium nisi tempor. Aenean tristique massa eget mattis condimentum. Nam fringilla sapien eu ipsum blandit, ac fringilla arcu aliquam. Proin erat ex, elementum eget justo scelerisque, eleifend aliquam libero. Morbi imperdiet nibh vel sapien sagittis euismod.
			</tx>
			<tx tc fn tb aj class="artikel">
				Cras nec interdum mauris. Donec justo tortor, tincidunt bibendum purus convallis, elementum vehicula massa. Maecenas mattis tortor at metus posuere, a pretium nisi tempor. Aenean tristique massa eget mattis condimentum. Nam fringilla sapien eu ipsum blandit, ac fringilla arcu aliquam. Proin erat ex, elementum eget justo scelerisque, eleifend aliquam libero. Morbi imperdiet nibh vel sapien sagittis euismod. Aenean quis metus ultricies, vehicula nisi eu, auctor massa. Nullam vitae est eu orci dignissim ultrices ut ut mi.
			</tx>
			<tx tc fn tb aj class="artikel">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem metus, tincidunt vitae congue vel, tempor vel ex. Cras nec interdum mauris. Donec justo tortor, tincidunt bibendum purus convallis, elementum vehicula massa. Maecenas mattis tortor at metus posuere, a pretium nisi tempor. Aenean tristique massa eget mattis condimentum. Nam fringilla sapien eu ipsum blandit, ac fringilla arcu aliquam. Proin erat ex, elementum eget justo scelerisque, eleifend aliquam libero. Morbi imperdiet nibh vel sapien sagittis euismod.
			</tx>
			<tx tc fn tb aj class="artikel">
				Cras nec interdum mauris. Donec justo tortor, tincidunt bibendum purus convallis, elementum vehicula massa. Maecenas mattis tortor at metus posuere, a pretium nisi tempor. Aenean tristique massa eget mattis condimentum. Nam fringilla sapien eu ipsum blandit, ac fringilla arcu aliquam. Proin erat ex, elementum eget justo scelerisque, eleifend aliquam libero. Morbi imperdiet nibh vel sapien sagittis euismod. Aenean quis metus ultricies, vehicula nisi eu, auctor massa. Nullam vitae est eu orci dignissim ultrices ut ut mi.
			</tx>
		</scroll-view>
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
	.mb-10 {
		margin-bottom: 10;
	},
	.mb-30 {
		margin-bottom: 30;
	},
	.mb-50 {
		margin-bottom: 50;
	},
	.center {
		align-self: center;
	},
	.artikel {
		line-height: 20;
		margin-bottom: 30;
	}
</style>
