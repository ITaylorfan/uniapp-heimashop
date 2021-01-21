<template>
	<view class="container">
		<view class="news-item" v-for="(item,index) in news" :key="item.id" @click="goDetail(item.id)">
			<view class="image">
				<image :src="item.img_url" mode="" @error="imageError(index)"></image>
			</view>
			<view class="right-content">
				<view class="title">
					{{item.title}}
				</view>
				<view class="bottom-text">
					<!-- 在此处使用过滤器 -->
					<view class="time">发表时间：{{item.add_time | timeFilter}}</view>
					<view class="num">浏览次数：{{item.click}}</view>
				</view>
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
		props:{
			news:{
				type:Array,
				default:[]
			}
		},
		methods:{
			//点击跳转函数 交给父组件处理
			goDetail(id){
				
				this.$emit("goDetail",id)
			},
			//处理图片加载错误
			imageError(index){
				//console.log(index)
				//console.log(e)
				this.news[index].img_url="http://itaylorfan.top:8081/TS/TS12-30-2.jpg"
				console.log("图片出错了")
			}
		},
		//自定义过滤器 此处已使用全局过滤器代替
		// filters:{
		// 	timeFilter:(myDate)=>{
		// 		const date=new Date(myDate)
		// 		let year=date.getFullYear()
		// 		let month=(date.getMonth()+1).toString().padStart(2,0)
		// 		//padStart() ES2017新增方法 对字符串进行填充
		// 		let Day=date.getDate().toString().padStart(2,0)
		// 		let Hour=date.getHours().toString().padStart(2,0)
		// 		let Min=date.getMinutes().toString().padStart(2,0)
		// 		let Second=date.getSeconds().toString().padStart(2,0)
		// 		return year+"-"+month+"-"+Day+" "+Hour+":"+Min+":"+Second
		// 	}
		// }
	}
</script>

<style lang="scss">
	@import "../styles/main.scss";
	.container{
		.news-item{
			width: 100%;
			height: 200rpx;
			@include Left;
			border-bottom: 1px solid $ThemeColor;
			padding: 10rpx;
			.image{
				flex: 0 0 220rpx;
				height: 100%;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.right-content{
				flex: 1;
				height: 100%;
				@include ColumnTop;
				padding-left: 10rpx;
				.title{
					flex: 0 0 120rpx;
					width: 100%;	
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.bottom-text{
					flex:1;
					width: 100%;
					@include ColumnTopLeft;
					font-size: 20rpx;
					.time{
						@include Left;
					}
					.num{
						flex: 1;
						@include Left;
					
					}
				}
			}
		}
	}
</style>
