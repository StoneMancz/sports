import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueWechatTitle from 'vue-wechat-title'
import Axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Video from "video.js";
import "video.js/dist/video-js.min.css"

Vue.prototype.$axios = Axios
Vue.prototype.$video = Video
Axios.defaults.baseURL = '/api/'
Vue.use(VueWechatTitle)
Vue.use(iView);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app') 