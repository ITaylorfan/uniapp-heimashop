<template>
	<view class="container">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
			<swiper-item v-for="(item,index) in swpier" :key="item.id">
				<view class="swiper-item">
					<image :src="item.src" mode="" @error="imageError(index)"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				swpier:[]
			}
		},
		methods: {
			async getSwiperData(){
				const res=await this.$Request({url:"/api/getthumimages/"+this.id})
				this.swpier=res.data.message
				
			},
			//处理图片加载错误
			imageError(index){
				//console.log(index)
				//console.log(e)
				this.swpier[index].src="http://itaylorfan.top:8081/TS/TS12-30-2.jpg"
				console.log("图片出错了")
			},
		},
		onLoad(option) {
			this.id=option.id
			this.getSwiperData()
		}
	}
</script>

<style lang="scss">
.container{
	width: 100%;
	swiper{
		width: 100%;
		height: 500rpx;
		swiper-item{
			width: 100%;
			height: 100%;
			.swiper-item{
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
</style>
