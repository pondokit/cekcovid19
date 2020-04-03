<template>
	<view class="container" :style="{paddingTop: status_bar_height}">
		<view class="c-head">
			<view class="user">
				<image
  				:source="require('../assets/images/user.png')"
  				class="img"
  			/>
				<text class="name"> hai, pias!	</text>
			</view>
			 <ionicons name="ios-timer" class="h-icon" color="#4E4E4E" />
			</view>
		<view class="menu" :style="stylesDimen.scrollMenu">
			<ScrollView :horizontal="true" >
				<view class="s-menu">
					<view>
						<text class="s-title">bersama lawan</text>
						<text class="s-title uppercase">covid 19</text>
					</view>
					<touchable-opacity class="s-handle">
						<text class="s-handleTitle">kenali</text>
					</touchable-opacity>
				</view>
				<view class="s-menu">
					<view>
						<text class="s-title">mulai cek mandiri</text>
						<text class="s-title uppercase">covid 19</text>
					</view>
					<touchable-opacity class="s-handle">
						<text class="s-handleTitle">mulai</text>
					</touchable-opacity>
				</view>
				<view class="s-menu">
					<view>
						<text class="s-title">mulai cek harian</text>
						<text class="s-title uppercase">covid 19</text>
					</view>
					<touchable-opacity class="s-handle">
						<text class="s-handleTitle">mulai</text>
					</touchable-opacity>
				</view>
			</ScrollView>
			</view>
		<view class="status">
			<text class="t-menu">Status Terkini</text>
			<view class="c-data">
				<view class="data">
					<view class="c-icon">
						<ionicons name="md-search" class="d-icon" color="#FC950D" />
					</view>
					<text class="amount" :style="{color:'#FC950D'}">1.099</text>
					<text class="notice">Dalam Perawatan</text>
				</view>
				<view class="data">
					<view class="c-icon">
						<ionicons name="md-close" class="d-icon" color="#FC2D2D" />
					</view>
					<text class="amount" :style="{color:'#FC2D2D'}">69</text>
					<text class="notice">Meninggal</text>
				</view>
				<view class="data">
					<view class="c-icon">
						<ionicons name="md-add" class="d-icon" color="#04A287" />
					</view>
					<text class="amount" :style="{color:'#04A287'}">1.000</text>
					<text class="notice">Sembuh</texttouchable-opacity>
				</view>
			</view>
			</view>
		<view class="rujukan">
			<view class="h-rujukan">
				<text class="t-menu">Daftar RS Rujukan</text>
				<touchable-opacity>
					<text class="lengkap">lihat lengkap</text>
				</touchable-opacity>
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
	import { Dimensions, StatusBar } from 'react-native';
	import { Ionicons } from "@expo/vector-icons";

	const screenWidth = Math.round(Dimensions.get('window').width);
	export default {
		components: {
				Ionicons
			},
		computed: {
			status_bar_height() {
				return  StatusBar.currentHeight || 0 ;
			},
		},
		data() {
    return {
      stylesDimen: {
        scrollMenu: {
          width: Dimensions.get("window").width,
        },
			}
    };
  },
	}
</script>

<style>
	.container {
		flex: 1;
		align-items: center;
		background-color: rgb(255, 255, 255);
	},
	.c-head {
		height: 90;
		width: 100%;
		margin-bottom: 10;
		padding-left: 30;
		padding-right: 30;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	},
	.h-icon {
		font-size: 23;
	},
	.user {
		flex-direction: row;
		align-items: center;
	},
	.img {
		width: 45;
		height: 45;
		margin-right: 10;
	}
	.name {
		font-size: 20;
		line-height: 22;
		color: #363636;
		text-transform: capitalize;
	}
	.menu {
		height: 160;
		padding-left: 30;
		margin-bottom: 45;
	}
	.s-menu {
		height: 150;
		width: 315;
		background-color: #009C9F;
		border-radius: 10;
		flex-direction: row;
		align-items: center;
		padding: 20;
		margin-right: 15;
		justify-content: space-between;
	},
	.s-title {
		font-size: 18;
		font-weight: bold;
		line-height: 28;
		color: #fff;
		text-transform: capitalize;
	},
	.uppercase {
		text-transform: uppercase;
	},
	.s-handle {
		width: 90;
		height: 40;
		justify-content: center;
		align-items: center;
		background-color: #17C6CA;
		border-radius: 5;
	},
	.s-handleTitle {
		color: #FFF;
		font-size: 14;
		font-weight: bold;
		line-height: 17;
		text-transform: capitalize;
	},
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
	.c-icon {
		width: 25;
		height: 25;
		background-color: rgba(239, 108, 0, 0.1);
		border-radius: 30;
		justify-content: center;
		align-items: center;
	},
	.d-icon {
		font-size: 20;
	},
	.amount {
		font-size: 28;
		font-weight: bold;
		line-height: 34;
		color: #EF6C00;
		margin-top: 8;
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
