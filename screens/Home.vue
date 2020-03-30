<template>
	<view class="container" :style="{paddingTop: status_bar_height}">
		<view class="wrapHeader">
			<image
				:source="require('../assets/wave.png')"
				:style="{position: 'absolute', zIndex: -10, top: 0, width: '100%', height: 520}"
			/>
			<view class="header">
				<view>
					<text class="title">lawan</text>
					<text class="title">covid 19</text>
				</view>
				<image
					:source="require('../assets/home.png')"
					class="img"
				/>
			</view>
		</view>
		<view class="menu">
			<view class="status">
				<text class="menuTitle">status terkini</text>
				<view class="data">
					<text>Data</text>
				</view>
			</view>
			<view class="rujukan">
				<view class="rowMenu">
					<text class="menuTitle">daftar rumah sakit rujukan</text>
					<text class="handle">lihat lengkap</text>
					</view>
				<touchable-opacity class="listRujuk">
					<text class="rs">RS. PKU Muhammadiyah</text>
					<text class="alamat"> <ionicons name="md-locate" color="#4E4E4E" /> Alamat lokasinya rumahsakit</text>
				</touchable-opacity>
				<touchable-opacity class="listRujuk">
					<text class="rs">RS. PKU Muhammadiyah</text>
					<text class="alamat"> <ionicons name="md-locate" color="#4E4E4E" /> Alamat lokasinya rumahsakit</text>
				</touchable-opacity>
			</view>
			<view class="cek">
				<text class="cekTitle">mulai cek mandiri</text>
				<touchable-opacity class="handleCek">
		    	<text class="cekTitle">Cek</text>
		    </touchable-opacity>
			</view>
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
		justify-content: center;
		align-items: center;
		background-color: #009C9F;
	},
	.wrapHeader{
		width: 100%;
		height: 255;
	},
	.header {
		height: 250;
		width: 100%;
		padding-right: 30;
		padding-left: 30;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	},
	.title {
		font-size: 24;
		font-weight: bold;
		text-transform: uppercase;
		color: #fff;
	},
	.img {
		width: 91;
		height: 95;
	},
	.menu {
		flex: 1;
		width: 100%;
		padding: 30;
		background-color: #fff;
		border-top-left-radius: 30;
		border-top-right-radius: 30;
	},
	.menuTitle {
		font-size: 18;
		text-transform: capitalize;
		font-weight: bold;
		line-height: 22;
	},
	.status {
		margin-bottom: 25;
	},
	.data {
		width: 100%;
		height: 135;
		background-color: #fff;
		border-radius: 10;
		margin-top: 17;
		elevation: 6;
	},
	.rowMenu {
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 19;
	},
	.listRujuk {
		width: 100%;
		height: 80;
		background-color: #fff;
		border-radius: 10;
		padding-left: 30;
		padding-top: 15;
		padding-bottom: 20;
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
		font-weight: normal;
		font-size: 13px;
		line-height: 16px;
	},
	.handle {
		font-size: 11;
		line-height: 13;
		color: #009C9F;
		font-weight: normal;
	},
	.cek {
		width: 100%;
		height: 90;
		padding-left: 15;
		padding-right: 15;
		margin-top: 26;
		border-radius: 10;
		flex-direction: row;
		justify-content: space-between;
		background-color: rgb(34, 167, 232);
		align-items: center;
		elevation: 6;
	},
	.cekTitle {
		font-size: 18;
		font-weight: bold;
		color: #fff;
	},
	.handleCek {
		width: 98;
		background-color: #17C6CA;
		height: 33;
		align-items: center;
		justify-content: center;
		border-radius: 5;
	}
</style>
