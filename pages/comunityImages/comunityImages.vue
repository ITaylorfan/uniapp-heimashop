<template>
	<view class="container">
		<scroll-view scroll-y="true" class="left">
			<view @click="itemClick(index,item.id)" :class="active===index?'active':''" v-for="(item,index) in cates" :key="item.id">{{item.title}}</view>
		
		</scroll-view>
		
		<scroll-view scroll-y="true" class="right">
			<view class="right-item" v-for="(item,index) in rightData" :key="item.id">
				<view class="image-box">
				<!-- <image src="http://itaylorfan.top:8081/TS/TS12-30-2.jpg"></image> -->
				<image :src="item.img_url" @error="imageError(index)"></image>
				</view>
				<view class="title">{{item.title}}</view>
			</view>
			<view class="emptyData" v-if="this.rightData.length===0">暂无数据</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//存放左侧数据
				cates:[],
				//是否选中
				active:0,
				//存放右侧数据
				rightData:[]
			}
		},
		methods: {
			//获取左侧数据
			async getLeftData(){
				const res=await this.$Request({url:"/api/getimgcategory"})
				this.cates=res.data.message
				//console.log(res)
				
				//默认获取一项数据
				this.getRightData(this.cates[0].id)
			},
			//右侧数据
			async getRightData(id){
				const res=await this.$Request({url:`/api/getimages/${id}`})
				//console.log(res)
				this.rightData=res.data.message
			},
			itemClick(index,id){
				this.active=index
				this.getRightData(id)
			},
			//处理图片加载错误
			imageError(index){
				console.log(index)
				//console.log(e)
				this.rightData[index].img_url="http://itaylorfan.top:8081/TS/TS12-30-2.jpg"
				console.log("图片出错了")
			}
		},
		onLoad() {
			this.getLeftData()
		}
	}
</script>

<style lang="scss">
	@import "../../styles/main.scss";
	page{
		width: 100%;
		height: 100%;
	}
	.container{
		overflow: hidden;
		width: 100%;
		height: 100%;
		display: flex;
		.left{
			margin-top: 5rpx;
			flex: 0 0 200rpx;
			height: 100%;
			view{
				height: 80rpx;
				border-bottom: 2rpx solid #d5d5d5;
				line-height: 80rpx;
				text-align: center;
				&.active{
					background-color: $ThemeColor;
				}
			}
		
		}
		.right{
			box-sizing: border-box;
			flex: 1;
			height: 100%;
			// padding: 10rpx;
			margin-left: 10rpx;
			// margin-right: 50rpx;
			margin-top: 10rpx;
			.right-item{
				box-sizing: border-box;
				width: 100%;
				@include ColumnTopLeft;
				.image-box{
					flex: 1;
					width: 550rpx;
					image{
						width:100%;
						height: 500rpx;
					}
				}	
				.title{
					flex: 0 0 80rpx;
					@include Left;
					width: 550rpx;
					padding: 5rpx;
					// padding-right: 20rpx;
					box-sizing: border-box;
					font-size: 28rpx;
				}
			}
		}
	}
</style>
