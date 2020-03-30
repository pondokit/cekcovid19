<template>
	<view class="container" :style="{paddingTop: status_bar_height}">
		<view class="c-head">
			<text>header</text>
		</view>
		<view class="menu">
			<text>Menu</text>
		</view>
		<view class="status">
			<text class="t-menu">Status Terkini</text>
			<view class="c-data">
				<view class="data">
					<text class="i-kon" :style="{color: '#FC950D', backgroundColor: 'rgba(239, 108, 0, 0.1)'}">o</text>
					<text class="amount" :style="{color:'#FC950D'}">1.099</text>
					<text class="notice">Dalam Perawatan</text>
				</view>
				<view class="data">
					<text class="i-kon" :style="{color: '#FC2D2D', backgroundColor: 'rgba(252, 45, 45, 0.1)'}">x</text>
					<text class="amount" :style="{color:'#FC2D2D'}">69</text>
					<text class="notice">Meninggal</text>
				</view>
				<view class="data">
					<text class="i-kon" :style="{color: '#04A287', backgroundColor: 'rgba(4, 162, 135, 0.1)'}">+</text>
					<text class="amount" :style="{color:'#04A287'}">1.000</text>
					<text class="notice">Sembuh</text>
				</view>
			</view>
		</view>
		<view class="rujukan">
			<view class="h-rujukan">
				<text class="t-menu">Daftar RS Rujukan</text>
				<text class="lengkap">lihat lengkap</text>
			</view>
			<touchable-opacity class="listRujuk">
				<text class="rs">RS. PKU Muhammadiyah</text>
				<text class="alamat"> <ionicons name="md-locate" color="#4E4E4E" /> Alamat lokasinya rumahsakit jalab dan provinsi rumah sakitnya</text>
			</touchable-opacity>
			<touchable-opacity class="listRujuk">
				<text class="rs">RS. PKU Muhammadiyah</text>
				<text class="alamat"> <ionicons name="md-locate" color="#4E4E4E" /> Alamat lokasinya rumahsakit jalab dan provinsi rumah sakitnya</text>
			</touchable-opacity>
		</view>
	</view>
</template>

<script>
import { StatusBar } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default {
	components: {
			Ionicons
		},
	computed: {
		status_bar_height() {
			return  StatusBar.currentHeight || 0 ;
		},
	},
}
</script>

<style>
	.container {
		flex: 1;
		align-items: center;
		background-color: #E5E5E5;
	},
	.c-head {
		height: 80;
		width: 100%;
		background-color: red;
		margin-bottom: 10;
		padding-left: 30;
		padding-right: 30;
	},
	.menu {
		height: 150;
		width: 100%;
		background-color: yellow;
		padding-left: 30;
		margin-bottom: 45;
	}
	.status {
		min-height: 160;
		width: 100%;
		padding-left: 30;
		padding-right: 30;
		margin-bottom: 30;
	},
	.t-menu {
		font-size: 18;
		font-weight: bold;
		line-height: 22;
		margin-bottom: 10;
	},
	.data {
		align-items: center;
	},
	.c-data {
		width: 100%;
		height: 150;
		background-color: #fff;
		border-radius: 10;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-left: 20 ;
		padding-right: 20 ;
		elevation: 6;
	},
	.i-kon {
		color: orange;
		border-radius: 15;
		width: 25;
		height: 25;
		font-size: 20;
		padding-left: 6;
		/* background-color: rgba(239, 108, 0, 0.1); */
	},
	.amount {
		font-size: 28;
		font-weight: bold;
		line-height: 34;
		color: #EF6C00;
		margin-top: 10;
		margin-bottom: 10;
	},
	.notice {
		font-size: 11;
		line-height: 13;
		color: #979797;
	},
	.rujukan {
		min-height: 160;
		width: 100%;
		padding-left: 30;
		padding-right: 30;
		margin-bottom: 30;
	},
	.h-rujukan {
		flex-direction: row;
		justify-content: space-between;
	},
	.lengkap {
		font-size: 11;
		line-height: 13;
		color: #009C9F;
		font-weight: normal;
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
		font-weight: bold;
		font-size: 14px;
		line-height: 17px;
		color: #363636;
		margin-bottom: 11;
	},
	.alamat {
		width: 90%;
		font-weight: normal;
		font-size: 13px;
		line-height: 20px;
	}
</style>
