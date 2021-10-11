import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
  path: '/sellerpage',
  component: () => import('@/views/SellerPage')
}, {
  path: '/trendpage',
  component: () => import('@/views/TrendPage')
}]

const router = new VueRouter({
  routes
})

export default router