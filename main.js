import Vue from 'vue'
import App from './App'
import {Request} from "./Request/index.js"

Vue.config.productionTip = false
Vue.prototype.$Request=Request

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
