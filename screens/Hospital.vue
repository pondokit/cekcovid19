<template>
	<view class="container" :style="{paddingTop: status_bar_height}">
		<bg-page />

		<view class="page-header" :style="{width: screen.width}">
			 <ionicons name="ios-arrow-round-back" class="icon" color="#fff" />
			 <tx fb cw hs tc> pusat bantuan <tx>
		</view>

		<view class="page-content center" :style="{width: screen.width}">
			<tx fb tc hm>pusat bantuan</tx>
			<text-input
				class="search"
				placeholder="Ketik Kota/Kabupaten/Provinsi"
			 />

			 <view class="call">
				 <tx fb hs cw >Hubungi 199 EXT 9</tx>
				 <touchable-opacity class="handle-call center">
					 <tx cpt cp tu fb>panggil</tx>
				 </touchable-opacity>
			 </view>

			 <touchable-opacity class="listRujuk">
 				<tx fb al cb class="rs">RS. PKU Muhammadiyah</tx>
 				<tx fn al cb class="alamat"> <ionicons name="md-locate" color="#4E4E4E" /> Alamat lokasinya rumahsakit jalab dan provinsi rumah sakitnya</tx>
 			</touchable-opacity>
			 <touchable-opacity class="listRujuk">
 				<tx fb al cb class="rs">RS. PKU Muhammadiyah</tx>
 				<tx fn al cb class="alamat"> <ionicons name="md-locate" color="#4E4E4E" /> Alamat lokasinya rumahsakit jalab dan provinsi rumah sakitnya</tx>
 			</touchable-opacity>
			 <touchable-opacity class="listRujuk">
 				<tx fb al cb class="rs">RS. PKU Muhammadiyah</tx>
 				<tx fn al cb class="alamat"> <ionicons name="md-locate" color="#4E4E4E" /> Alamat lokasinya rumahsakit jalab dan provinsi rumah sakitnya</tx>
 			</touchable-opacity>
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
		padding-top: 50;
		padding-left: 30;
		padding-right: 30;
	},
	.icon {
		margin-right: 25;
		font-size: 35;
	},
	.center {
		align-items: center;
	},
	.search {
		height: 40;
		width: 330;
		background-color: #FFF;
		border-radius: 6;
		margin-top: 35;
		margin-bottom: 35;
		padding-left: 10;
		elevation: 3;
	},
	.call {
		width: 100%;
		min-height: 100;
		border-radius: 10;
		margin-bottom: 30;
		background-color: #17C6CA;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-left: 30;
		padding-right: 20;
	},
	.handle-call {
		width: 80;
		height: 30;
		border-radius: 17;
		background-color: #fff;
		justify-content: center;
	},
	.listRujuk {
		width: 100%;
		min-height: 100;
		background-color: #fff;
		border-radius: 10;
		padding-left: 20;
		padding-top: 15;
		padding-bottom: 15;
		margin-bottom: 14;
		elevation: 6;
	},
	.rs {
		font-size: 14px;
		line-height: 17px;
		margin-bottom: 11;
	},
	.alamat {
		width: 90%;
		font-size: 13px;
		line-height: 20px;
	}
</style>
