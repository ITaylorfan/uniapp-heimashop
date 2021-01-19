<template>
	<view class="container">
		<view class="contact-text">
			<view class="top-image">
				<image src="http://itaylorfan.top:8081/materials/uniapp/aboutUs.jpg" mode="scaleToFill"></image>
			</view>
			<view class="text-container">
				<view class="center-text bottom-line" @click="TelPhone">
					联系电话：400-618-9090(点击拨打)
				</view>
				<view class="center-text">
					地址：湖北省孝感市孝南区湖北工程学院
				</view>
			</view>		
		</view>
		<view class="map-container">
			<map :latitude="latitude" :longitude="longitude" class="map" :markers="covers"></map>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude:30.937000,  //纬度  ,
				longitude:113.910000,//经度 
				//地图标记
				covers:[
				{
                latitude: 30.937000,
                longitude: 113.910000,
                iconPath: 'http://itaylorfan.top:8081/materials/uniapp/hbgcxyLogo.png',
				width:30,
				height:30
				}
				]
			}
		},
		methods: {
			TelPhone(){
				uni.makePhoneCall({
				    phoneNumber: '400-618-9090' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "../../styles/main.scss";
	.container{
		width: 100%;
		height:100vh;
		@include ColumnTop;
		.contact-text{
			flex: 1;
			width: 100%;
			//background-color: #eee;
			@include  ColumnTop;
			.top-image{
				flex: 0 0 300rpx;
				width: 100%;
				height: 100%;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.text-container{
				flex: 1;
				@include ColumnTop;
				width: 100%;
				padding: 0 10rpx;
				.center-text{	
					flex: 1;
					@include Left;
					width: 100%;
					padding:20rpx 0;
					&.bottom-line{
						border-bottom: 4rpx solid #d4d4d4;
					}
				}
			}
		}
		.map-container{
			flex: 4;
			width: 100%;
			padding: 0 10rpx;
			.map{
				width:750rpx;
				height:750rpx;
			}
		}
	}
</style>
