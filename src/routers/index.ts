import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import goodsList from '../view/goods/goodsList/index.vue'
import layout from '../layout/index.vue'
import Navbar from '../layout/components/Navbar.vue'
import NotFound from '../view/404/index.vue'
import GoodsList from '../view/goods/goodsList/index.vue'
import Classify from '../view/goods/classify/index.vue'
const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    component: goodsList,
    name: 'shabi'
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/goodsList',
    component: layout,
    name: '商品',
    children: [
      {
        path: '/goodsList',
        component: GoodsList,
        name: '商品列表'
      },
      {
        path: '/goodsClassify',
        component: Classify,
        name: '商品分类'
      }
    ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((e, from, next) => {
  next()
})

export {
  routes
} 

export default router