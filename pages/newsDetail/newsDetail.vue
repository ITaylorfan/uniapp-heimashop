<template>
	<view class="container">
		<view class="title">{{content.title}}</view>
		<view class="info">
			<view class="time">发表时间：{{content.add_time | timeFilter}}</view>
			<view class="num">浏览次数：{{content.click}}</view>
		</view>
		<rich-text :nodes="content.content" class="content"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:{},
				id:0
			}
		},
		methods: {
			async getContent(){
				const res=await this.$Request({url:"/api/getnew/"+this.id})
				this.content=res.data.message[0]
			}
		},
		onLoad(option) {
			this.id=option.id
			this.getContent()
		}
	}
</script>

<style lang="scss">
	@import "../../styles/main.scss";
	.container{
		width: 100%;
		@include ColumnTopLeft;
		padding: 10rpx;
		.title{
			flex: 0 0 60rpx;
			width: 100%;
			@include Center;
			font-size: 38rpx;
		}
		.info{
			flex: 0 0 40rpx;
			width: 100%;
			@include Left;
			font-size: 20rpx;
			border-bottom: 1px solid $ThemeColor;
			.time{
				flex: 1;
				@include Left;
			}
			.num{
				flex: 1;
				@include Center;
			}
		}
		.content{
			flex: 1;
			margin-top: 10rpx;
		}
	}
</style>
