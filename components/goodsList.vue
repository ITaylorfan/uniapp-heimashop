<template>
	<view class="goods-container">
		<view class="goods-item" v-for="(item,index) in goods" :key="item.id">
			<view class="image-box">
				<!-- <image :src="item.img_url?item.img_url:'http://itaylorfan.top:8081/TS/TS12-30-2.jpg'"></image> -->
				<image src="http://itaylorfan.top:8081/TS/TS12-30-2.jpg"></image>
			</view>
			<view class="price-box">
				<view class="now-price">￥{{item.sell_price}}</view>
				<view class="history-price">￥{{item.market_price}}</view>
			</view>
			<view class="goods-title">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props: {
			goods: {
				type: Array,
				default: []
			},
		}
	}
</script>

<style lang="scss">
	@import "@/styles/main.scss";
	.goods-container {
		flex: 1;
		width: 100%;
		@include Center;
		flex-wrap: wrap;
		justify-content: left;
		margin-top: 10rpx;

		.goods-item {
			flex: 0 0 45%;
			height: 500rpx;
			background-color: white;
			margin-left: 3.33%;
			margin-bottom: 20rpx;
			@include ColumnCenter;

			.image-box {
				box-sizing: border-box;
				flex: 5;
				width: 100%;
				padding: 10rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.price-box {
				flex: 1;
				// box-sizing: border-box;
				@include Center;
				justify-content: flex-start;
				width: 100%;
				padding-left: 10rpx;

				.now-price {
					color: red;
				}

				.history-price {
					padding-left: 10rpx;
					font-size: 26rpx;
					text-decoration: line-through;
					color: #8d8d8d;
				}
			}

			.goods-title {
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
</style>
