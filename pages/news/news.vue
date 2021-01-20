<template>
	<view>
		<!-- 新闻组件 -->
		<NewsItem :news="news" @goDetail="handleGoDetail"></NewsItem>
	</view>
</template>

<script>
	import NewsItem from "../../components/newsItem.vue";
	export default {
		data() {
			return {
				time:"2020-1-20 21:00:00",
				num:100,
				news:[]
			}
		},
		components:{
			NewsItem
		},
		methods: {
			async getNewsList(){
				const res=await this.$Request({url:"/api/getnewslist"})
				//console.log(res)
				this.news=res.data.message
			},
			//跳转方法
			handleGoDetail(id){
				uni.navigateTo({
					url:"/pages/newsDetail/newsDetail?id="+id
				})
			}
		},
		
		onLoad() {
			this.getNewsList()
		}
	}
</script>

<style lang="scss">
</style>
