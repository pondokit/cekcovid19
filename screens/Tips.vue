<template>
	<view class="container" :style="{paddingTop: status_bar_height}">
		<bg-page :navigation="navigation" title="artikel dan tips">
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
		</bg-page>
		
	</view>
</template>

<script>
	import { Dimensions, StatusBar } from 'react-native';

	export default {
		props: ['navigation'],
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
