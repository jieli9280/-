import Vue from 'vue'
import Router from 'vue-router'
// 会员页
import envelop from '../components/tabBar/envelop.vue'
// 主页
import home from '../components/tabBar/home.vue'
// 购物车
import shopping from '../components/tabBar/shopping.vue'
// 搜索页
import search from '../components/tabBar/search.vue'
// 新闻列表详情页
import newlist from '../components/tabBar/new/newlist.vue';
// 新闻详情列表内容
import details from '../components/tabBar/new/details.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'

        },
        {
            // 检测地址栏中的哈希值 调用对应的组件
            path: '/envelop',
            component: envelop
        },
        {
            path: '/home',
            name: home,
            component: home
        },
        {
            path: '/shopping',
            component: shopping
        },
        {
            path: '/search',
            component: search
        },
        {
            path: '/home/newlist',
            component: newlist
        },
        {
            path: '/home/details/:id',
            component: details
        }
    ]
})