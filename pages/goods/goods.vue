<template>
	<view class="container">
		<GoodsList :goods="goods"></GoodsList>
	</view>
</template>

<script>
	import GoodsList from "../../components/goodsList.vue"
	export default {
		data() {
			return {
				//商品列表
				goods:[],
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
			async getGoods(){
				let number=1
				const res=await this.$Request({url: `/api/getgoods?pageindex=${number}`})
				//console.log(res)
				this.goods=res.data.message
			}
		}
	}
</script>

<style>

</style>
