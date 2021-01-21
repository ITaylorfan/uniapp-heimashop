<template>
	<view class="container">
		<GoodsList :goods="goods"  @navigateToDetail="handleNavigateToDetail"></GoodsList>
		<view class="bottom-line" v-if="isBottom">-----我也是有底线的-----</view>
	</view>
</template>

<script>
	import GoodsList from "../../components/goodsList.vue"
	export default {
		data() {
			return {
				//商品列表
				goods:[],
				//商品数据页数
				pageIndex:1,
				//是否到底
				isBottom:false
			}
		},
		onLoad() {
			this.getGoods()
		},
		components:{
			GoodsList
		},
		methods: {
			//获取推荐商品
			async getGoods(callback){
				const res=await this.$Request({url: `/api/getgoods?pageindex=${this.pageIndex}`})
				//console.log(res)
				//合并数组				
				this.goods=[...this.goods,...res.data.message]
				//执行回调 关闭下拉刷新的圈
				// if(callback){
				// 	callback()
				// }
				//或者
				// console.log(callback)
				callback && callback()
				
			},
			//商品详情跳转
			handleNavigateToDetail(id){
				uni.navigateTo({
					url:"/pages/goodsDetail/goodsDetail?id="+id
				})
				
			}
		},
		onReachBottom() {
			//console.log("触发触底")
			//数据不满足一页了 就不用加载下一页数据
			if(this.goods.length<this.pageIndex*10) return this.isBottom=true
			//加载下一页数据
			this.pageIndex++
			this.getGoods()
		},
		//下拉刷新
		onPullDownRefresh() {
			console.log("aaa")
			//重新获取数据
			this.pageIndex=1
			this.isBottom=false
			
			setTimeout(()=>{
				this.goods=[]   //清空数组
				this.getGoods(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
		}
	}
</script>

<style>
	.container{
		background-color: #eee;
	}
	.bottom-line{
		text-align: center;
		font-size: 26rpx;
		line-height: 30rpx;
		padding: 10rpx 0;
	}
</style>
