<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("./static/font/iconfont.css");
	view{
		box-sizing: border-box;
	}
	
	//重置富文本样式
	.gomeImgLoad{
		width: 740rpx;
		height: auto;
	}
	
</style>
