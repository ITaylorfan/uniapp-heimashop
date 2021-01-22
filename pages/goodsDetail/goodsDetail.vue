<template>
	<view class="container">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
			<swiper-item v-for="(item,index) in swpier" :key="item.id">
				<view class="swiper-item">
					<image :src="item.src" mode="" @error="imageError(index)" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="price-box">
			<view class="now-price">￥{{goods_params.sell_price}}</view>
			<view class="history-price">￥{{goods_params.market_price}}</view>
		</view>
		<view class="title">
			{{goods_params.title}}
		</view>
		<!-- 货号库存 -->
		<view class="goods-id-num">
			<view class="goods-id">
				货号：{{goods_params.goods_no}}
			</view>
			<view class="goods-num">
				库存：{{goods_params.stock_quantity}}
			</view>
		</view>
		<!-- 详细介绍 -->
		<view class="detail">
			<view class="detail-title">详细介绍</view>
			<rich-text :nodes="content.content"></rich-text>
		</view>
		<view class="bottom-nav">
			<uni-goods-nav class="nav" :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue';
	export default {
		data() {
			return {
				id: 0,
				swpier: [],
				goods_params: {},
				content: {},

				// 下面是购物车组件的相关变量
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					// info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		components: {
			uniGoodsNav
		},
		methods: {
			// 购物车组件相关方法
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			},
			
			// 获取商品内容信息
			async getGoodContent() {
				const res = await this.$Request({
					url: "/api/goods/getdesc/" + this.id
				})
				this.content = res.data.message[0]
				console.log(res)
			},
			async getGoodsParams() {
				const res = await this.$Request({
					url: "/api/goods/getinfo/" + this.id
				})
				//console.log(res)
				this.goods_params = res.data.message[0]
			},
			async getSwiperData() {
				const res = await this.$Request({
					url: "/api/getthumimages/" + this.id
				})
				this.swpier = res.data.message

			},
			//处理图片加载错误
			imageError(index) {
				//console.log(index)
				//console.log(e)
				this.swpier[index].src =
					"http://r.photo.store.qq.com/psc?/V533gXC5381eG93SM8Sn3cXE8U3y3OXT/TmEUgtj9EK6.7V8ajmQrEPNe3.Cpu9pWb5NbyJa8dik2qnHiHdiUe7pwXjf4kKhPZFIfHtgRDWMuKQP.P8TO.zOu*9GPDCMv4PxXL7OKRkA!/r"
				console.log("图片出错了")
			},
		},
		onLoad(option) {
			this.id = option.id
			this.getSwiperData()
			this.getGoodsParams()
			this.getGoodContent()
		}
	}
</script>

<style lang="scss">
	@import "../../styles/main.scss";

	.container {
		background-color: #E9E9E9;
		width: 100%;

		swiper {
			width: 100%;
			height: 500rpx;

			swiper-item {
				width: 100%;
				height: 100%;

				.swiper-item {
					width: 100%;
					height: 100%;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}

		.price-box {
			width: 100%;
			height: 80rpx;
			@include Left;
			background-color: white;

			.now-price {
				height: 100%;
				flex: 0 0 160rpx;
				@include Center;
				// justify-content: flex-end;
				color: $ThemeColor;
			}

			.history-price {
				height: 100%;
				// padding-left: 10rpx;
				flex: 1;
				@include Left;
				color: #c6c6c6;
				font-size: 26rpx;
				text-decoration: line-through;
			}
		}

		.title {
			padding-left: 10rpx;
			padding-bottom: 10rpx;
			background-color: white;
			width: 100%;
			height: 100rpx;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.goods-id-num {
			padding-left: 10rpx;
			background-color: white;
			margin-top: 10rpx;
			font-size: 28rpx;
		}

		.detail {
			padding-bottom: 60px;
			margin-top: 10rpx;
			background-color: white;
			padding-left: 10rpx;
			padding-right: 10rpx;

			.detail-title {
				height: 60rpx;
				@include Left;
				font-size: 32rpx;
				font-weight: bold;
			}

		}
		.bottom-nav{	
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			.nav{
				 // border-top: 2px solid #eee;
				 background-color: #eee !important;
			}
		}	
	}
</style>
