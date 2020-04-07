<template>
	<scroll-view>
		<view class="container" :style="{paddingTop: status_bar_height}">
			<!-- <bg-common /> -->
			<view class="c-head">
				<view class="user">
					<image
						:source="require('../assets/images/user.png')"
						class="img"
					/>
					<tx fn al cb class="name">hai, pias!</tx>
				</view>
				<touchable-native-feedback :on-press="() => navigation.navigate('History')">
					<ionicons name="ios-timer" class="h-icon" color="#4E4E4E" />
				</touchable-native-feedback>
			</view>
			<view class="menu" :style="{width: screen.width}">
				<ScrollView :horizontal="true" :showsHorizontalScrollIndicator="false">
					<view 
						class="s-menu" 
						:style="{width: screen.width - 60, marginLeft: 30, backgroundColor: '#009C9F'}"
					>
						<image 
							:source="require('../assets/images/box-wave-aqua.png')" 
							class="box-wave"
							:style="{width: screen.width - 60}"
						/>
						<view>
							<tx fb al cw class="s-title">mulai cek mandiri</tx>
							<tx fb al cw class="s-title uppercase">covid 19</tx>
						</view>
						<touchable-native-feedback :on-press="() => navigation.navigate('CheckMandiri')">
							<view class="s-handle" :style="{backgroundColor: '#17C6CA'}">
								<tx fb ac cw class="s-handleTitle">Mulai</tx>
							</view>
						</touchable-native-feedback>
					</view>
					<view 
						class="s-menu" 
						:style="{width: screen.width - 60, backgroundColor: '#691BC7'}"
					>
						<image 
							:source="require('../assets/images/box-wave-violet.png')" 
							class="box-wave"
							:style="{width: screen.width - 60}"
						/>
						<view>
							<tx fb al cw class="s-title">mulai cek harian</tx>
							<tx fb al cw class="s-title uppercase">covid 19</tx>
						</view>
						<touchable-native-feedback>
							<view class="s-handle" :style="{backgroundColor: '#B621EA'}">
								<tx fb ac cw class="s-handleTitle">kenali</tx>
							</view>
						</touchable-native-feedback>
					</view>
					<view 
						class="s-menu" 
						:style="{width: screen.width - 60, marginRight: 30, backgroundColor: '#3D3AF7'}"
					>
						<image 
							:source="require('../assets/images/box-wave-blue.png')" 
							class="box-wave"
							:style="{width: screen.width - 60}"
						/>
						<view>
							<tx fb al cw class="s-title">bersama lawan</tx>
							<tx fb al cw class="s-title uppercase">covid 19</tx>
						</view>
						<touchable-native-feedback :on-press="() => navigation.navigate('ListTips')">
							<view class="s-handle" :style="{backgroundColor: '#003FBA'}">
								<tx fb ac cw class="s-handleTitle">kenali</tx>
							</view>
						</touchable-native-feedback>
					</view>
				</ScrollView>
			</view>
			<view class="status">
				<tx fb al cb class="t-menu">Status Terkini</tx>
				<view class="c-data">
					<view class="data">
						<view class="c-icon">
							<ionicons name="md-search" class="d-icon" color="#FC950D" />
						</view>
						<tx fb ac c="#FC950D" class="amount">1.099</tx>
						<tx fn al cm class="notice">Dalam Perawatan</tx>
					</view>
					<view class="data">
						<view class="c-icon">
							<ionicons name="md-close" class="d-icon" color="#FC2D2D" />
						</view>
						<tx fb ac c="#FC2D2D" class="amount">69</tx>
						<tx fn al cm class="notice">Meninggal</tx>
					</view>
					<view class="data">
						<view class="c-icon">
							<ionicons name="md-add" class="d-icon" color="#04A287" />
						</view>
						<tx fb ac c="#04A287" class="amount">1.000</tx>
						<tx fn al cm class="notice">Sembuh</tx>
					</view>
				</view>
			</view>
			<view class="rujukan">
				<view class="h-rujukan">
					<tx fb al cb class="t-menu">Daftar RS Rujukan</tx>
					<touchable-opacity  :on-press="() => navigation.navigate('Hospital')">
						<tx fn al cp class="lengkap">lihat lengkap</tx>
					</touchable-opacity>
				</view>

				<touchable-native-feedback v-for="n in 3">
					<view class="listRujuk">
						<tx fb al cb class="rs">RS. PKU Muhammadiyah</tx>
						<tx fn al cb class="alamat"> <ionicons name="md-locate" color="#4E4E4E" /> Alamat lokasinya rumahsakit jalab dan provinsi rumah sakitnya</tx>
					</view>
				</touchable-native-feedback>

			</view>
		</view>
	</scroll-view>
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
				return Dimensions.get("window");
			}
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
		text-transform: capitalize;
	}
	.menu {
		margin-bottom: 30;
	}
	.box-wave {
		position: absolute;
		height: 100;
		left: 0;
		bottom: 0;
		right: 0;
	}
	.s-menu {
		height: 120;
		border-radius: 10;
		flex-direction: row;
		align-items: center;
		padding: 20;
		margin-right: 15;
		justify-content: space-between;
		position: relative;
		overflow: hidden;
	},
	.s-title {
		font-size: 18;
		line-height: 28;
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
		border-radius: 5;
	},
	.s-handleTitle {
		font-size: 14;
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
		line-height: 34;
		margin-top: 8;
		margin-bottom: 10;
	},
	.notice {
		font-size: 11;
		line-height: 13;
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
