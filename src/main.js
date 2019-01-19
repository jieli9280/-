// 引入vue
import Vue from 'vue'
// 引入渲染作用域
import App from './App'
// 引入路由模块
import router from './router'
// vue底层优化
Vue.config.productionTip = false
    // 引入vue-resource
import resource from 'vue-resource';
// 引入按需模块
import { Button, Cell, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Toast, Card } from 'vant';

// 引入时间
import moment from 'moment';

import 'animate.css/animate.css';

import axiso from 'axios';
// 把axiso挂载到原型当中去 不能放到main.js 
Vue.prototype.axiso = axiso;

// axiso配置全局请求路径
axiso.defaults.baseURL = "http://127.0.0.1:5000/"
Vue
    .use(Button) // 按钮
    .use(Cell)
    .use(NavBar) // 导航栏
    .use(Tabbar) // tab切换
    .use(TabbarItem)
    .use(Swipe)
    .use(SwipeItem) // 轮播图
    .use(resource)
    .use(Toast) //ajax请求
    .use(Card); //咨询列表

// 设置全局post请求的第三个参数
Vue.http.options.emulateJSON = true;


// 定义全局事件时间过滤器
Vue.filter('moments', (data) => {
    return moment(data).format('YYYY-MM-DD :hh:mm:ss');
})

/* vue实例 */
new Vue({
    // 声明作用域
    el: '#app',
    // 挂载路由模块
    router,
    render: c => c(App)

})