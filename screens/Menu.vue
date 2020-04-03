<template>
	<view class="container" :style="{paddingTop: status_bar_height}">
		<view class="c-back">
      <touchable-opacity class="back">
	    	<ionicons name="ios-arrow-round-back" class="icon" color="#4E4E4E" />
	    </touchable-opacity>
    </view>
		<view class="c-header">
      <view class="header">
        <image
  				:source="require('../assets/user.png')"
  				class="img"
  			/>
        <text class="u-name">Hai, Pias !</text>
        <text class="u-contact">085868185466</text>
      </view>
    </view>
		<view class="c-menu">
      <touchable-opacity class="list">
        <text class="l-title">cek mandiri</text>
        <ionicons name="ios-arrow-round-forward" class="l-icon" color="#D8D8D8" />
	    </touchable-opacity>
      <touchable-opacity class="list">
        <text class="l-title">history pengecekan</text>
        <ionicons name="ios-arrow-round-forward" class="l-icon" color="#D8D8D8" />
	    </touchable-opacity>
      <touchable-opacity class="list">
        <text class="l-title">tips melawan COVID-19</text>
        <ionicons name="ios-arrow-round-forward" class="l-icon" color="#D8D8D8" />
	    </touchable-opacity>
      <touchable-opacity class="list">
        <text class="l-title">pusat bantuan</text>
        <ionicons name="ios-arrow-round-forward" class="l-icon" color="#D8D8D8" />
	    </touchable-opacity>
      <touchable-opacity class="out">
        <text class="l-title">keluar</text>
        <ionicons name="ios-log-out" class="l-icon" color="#D8D8D8" />
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
	},
  .c-back {
    width: 100%;
    height: 80;
    justify-content: center;
    padding-left: 30;
    padding-right: 30;
  },
  .icon {
    font-size: 40;
    font-weight: bold;
  },
  .c-header {
    width: 100%;
    height: 240;
    justify-content: center;
    padding-left: 30;
    padding-right: 30;
    margin-bottom: 35;
  },
  .header {
    width: 100%;
    height: 230;
    justify-content: center;
    align-items: center;
    border-radius: 10;
    background-color: #fff;
    elevation: 10;
  },
  .img {
    margin-bottom: 20;
  },
  .u-name {
    font-size: 24;
    line-height: 29;
    color: #363636;
    margin-bottom: 6;
  },
  .u-contact {
    font-size: 18;
    line-height: 22;
    color: #979797;
  },
  .c-menu {
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    padding-top: 40;
    padding-left: 30;
    padding-right: 30;
    border-radius: 40;
  },
  .list {
    width: 100%;
    height: 60;
    border-radius: 10;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    flex-direction: row;
    padding-left :35;
    padding-right: 20;
    margin-bottom: 20;
  },
  .l-title {
    font-size: 14;
    line-height: 17;
    font-weight: bold;
    text-transform: capitalize;
  },
  .l-icon {
    font-size: 25;
  },
  .out {
    width: 100%;
    height: 60;
    border-radius: 10;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    flex-direction: row;
    padding-left :35;
    padding-right: 20;
    margin-top: 30;
  }
</style>
