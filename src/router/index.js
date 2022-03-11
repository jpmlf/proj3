import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseView from '../views/Browse.vue'
import CartView from '../views/Cart.vue'
import AboutView from '../views/AboutView.vue'
import ColorView from '../views/ColorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/browse',
    name: 'browse',
    component: BrowseView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/color',
    name: 'color',
    component: ColorView
  },
]

const router = new VueRouter({
  routes
})

export default router
