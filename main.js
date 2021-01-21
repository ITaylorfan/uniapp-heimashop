import Vue from 'vue'
import App from './App'
import {Request} from "./Request/index.js"

Vue.config.productionTip = false
Vue.prototype.$Request=Request
Vue.filter("timeFilter",myDate=>{
	const date=new Date(myDate)
	let year=date.getFullYear()
	let month=(date.getMonth()+1).toString().padStart(2,0)
	//padStart() ES2017新增方法 对字符串进行填充
	let Day=date.getDate().toString().padStart(2,0)
	let Hour=date.getHours().toString().padStart(2,0)
	let Min=date.getMinutes().toString().padStart(2,0)
	let Second=date.getSeconds().toString().padStart(2,0)
	return year+"-"+month+"-"+Day+" "+Hour+":"+Min+":"+Second
})


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
