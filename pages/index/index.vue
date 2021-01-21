<template>
	<view class="content">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="(item,index) in swiper" :key="item.id">
				<view class="swiper-item">
					<navigator url="http://itaylorfan.top">
					<image :src="item.img" mode=""></image>
					</navigator>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="center-nav">
			<view class="nav-item" v-for="(item,index) in navs" @click="navigateTo(item.url)" :key="item.id">
				<view class="nav-icon iconfont" :class=" item.icon"></view>
				<view class="nav-title">{{item.title}}</view>
			</view>
		</view>
		
		<!-- 推荐商品 -->
		<view class="hot-goods">
			<view class="hot-title">
				推荐商品
			</view>
			<GoodsList :goods="goods" @navigateToDetail="handleNavigateToDetail"></GoodsList>
		</view>
	</view>
</template>

<script>
	import GoodsList from "../../components/goodsList.vue"
	
	export default {
		data() {
			return {
				//轮播图
				swiper: [],
				//商品列表
				goods:[],
				//中部导航栏
				navs:[
					{
						id:0,
						title:"黑马超市",
						icon:"icon-ziyuan",
						url:"/pages/goods/goods"
					},
					{
						id:1,
						title:"联系我们",
						icon:"icon-guanyuwomen",
						url:"/pages/contactUs/contactUs"
					},
					{
						id:2,
						title:"社区图片",
						icon:"icon-tupian",
						url:"/pages/comunityImages/comunityImages"
					},
					{
						id:3,
						title:"学习视频",
						icon:"icon-shipin",
						url:"/pages/studyVideo/studyVideo"
					},
					
				]
			}
		},
		onLoad() {
			this.getSwiperData()
			this.getGoods()
		},
		components:{
			GoodsList
		},
		methods: {
			async getSwiperData() {
				//发送请求				
				const res=await this.$Request({url: "/api/getlunbo"})
				//console.log(res)
				this.swiper=res.data.message
			},
			
			//获取推荐商品
			async getGoods(){
				let number=1
				const res=await this.$Request({url: `/api/getgoods?pageindex=${number}`})
				//console.log(res)
				this.goods=res.data.message
			},
			//中间导航栏跳转
			navigateTo(url){
				//console.log(url)
				uni.navigateTo({
					url
				})
			},
			//商品详情跳转
			handleNavigateToDetail(id){
				uni.navigateTo({
					url:"/pages/goodsDetail/goodsDetail?id="+id
				})
				
			}

			
		}
	}
</script>

<style lang="scss">
	@import "@/styles/main.scss";
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		swiper{
			flex: 0 0 380rpx;
			width: 100%;
			
			swiper-item{
				width: 100%;
				height: 100%;
				.swiper-item{
					width: 100%;
					height: 100%;
					navigator{
						width: 100%;
						height: 100%;
						
						image{
						width: 100%;
						height: 100%;
						}
					}
				}
			}
		}
		
		//中间的导航栏
		.center-nav{
			flex: 0 0 240rpx;
			width: 100%;
			display: flex;
			margin-top: 20rpx;
			.nav-item{
				flex: 1;
				height: 100%;
				@include ColumnCenter;
				.nav-icon{
					flex: 0 0 120rpx;
					width:120rpx;
					@include Center;
					font-size: 45rpx;
					background-color:$ThemeColor;
					border-radius: 50%;
					color: white;
				}
				.nav-title{
					margin-top: 10rpx;
					@include Center;
				}
			}
		}
		//推荐商品
		.hot-goods{
			flex: 1;
			width: 100%;
			background-color:#E2E2E2;
			@include ColumnCenter;
			padding-top: 10rpx;
			
			.hot-title{
				flex: 0 0 100rpx;
				background-color: white;
				width: 100%;
				@include Center;
				color: $ThemeColor;
				font-size: 40rpx;
				font-weight: bold;
			}
			.goods-container{
				flex: 1;
				width: 100%;
				@include Center;
				flex-wrap: wrap;
				justify-content:left;
				margin-top: 10rpx;
				.goods-item{
					flex:0 0 45%;
					height: 500rpx;
					background-color:white;
					margin-left: 3.33%;
					margin-bottom: 20rpx;
					@include ColumnCenter;
					
					.image-box{
						box-sizing: border-box;
						flex: 5;
						width: 100%;
						padding: 10rpx;
						image{
							width:100%;
							height: 100%;
						}
					}
					.price-box{
						flex: 1;
						// box-sizing: border-box;
						@include Center;
						justify-content: flex-start;
						width: 100%;
						padding-left: 10rpx;
						.now-price{
							color: red;
						}
						.history-price{
							padding-left: 10rpx;
							font-size: 26rpx;
							text-decoration: line-through;
							color: #8d8d8d;
						}
					}
					.goods-title{
						box-sizing: border-box;
						flex: 2;
						width: 100%;
						padding: 0 10rpx 10rpx 10rpx;
						display: -webkit-box;
						overflow: hidden;
						text-overflow: ellipsis;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
					}
				}
			}
		}
	}
</style>
