export const Request=params=>{
	const baseRequestUrl="http://itaylorfan.top:8082"
	return new Promise((resolve,reject)=>{
		uni.request({
			...params,
			url:baseRequestUrl+params.url,
			success:res=>{
				resolve(res)
			},
			fail:err=>{
				reject(err)
				uni.showToast({
					title: '获取数据失败',
					 icon:"none"
				});
			}
		})
	})
	
}