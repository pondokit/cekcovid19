<template>
	<view class="container" :style="{paddingTop: status_bar_height}">
		<bg-page title="pusat bantuan" :navigation="navigation">
			<tx fb tc hm ac>pusat bantuan</tx>
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
	}
	.center {
		align-items: center;
	}
	.search {
		height: 40;
		width: 100%;
		background-color: #FFF;
		border-radius: 6;
		margin-top: 35;
		margin-bottom: 35;
		padding-left: 10;
		elevation: 3;
	}
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
	}
	.handle-call {
		width: 80;
		height: 30;
		border-radius: 17;
		background-color: #fff;
		justify-content: center;
	}
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
	}
	.rs {
		font-size: 14px;
		line-height: 17px;
		margin-bottom: 11;
	}
	.alamat {
		width: 90%;
		font-size: 13px;
		line-height: 20px;
	}
</style>
