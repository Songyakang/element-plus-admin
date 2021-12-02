import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import goodsList from '../view/goods/goodsList/index.vue'
import layout from '../layout/index.vue'
import Navbar from '../layout/components/Navbar.vue'
import NotFound from '../view/404/index.vue'
import GoodsList from '../view/goods/goodsList/index.vue'
import Classify from '../view/goods/classify/index.vue'


const routes:Array<RouteRecordRaw & {icon: string}> = [
  {
    path: '/',
    component: goodsList,
    icon: ''
  },
  {
    path: '/404',
    component: NotFound,
    icon: ''
  },
  {
    path: '/goodsList',
    component: layout,
    icon: 'Location',
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
  },
  {
    path: '/table',
    component: layout,
    icon: 'Location',
    name: '表格',
    redirect: '/table/index',
    children: [
      {
        path: '/table/index',
        component: ()  => import('../view/table/index.vue'),
        name: '高级表格'
      }
    ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((e, from, next) => {
  // dispatch('route/addView', route)
  next()
})

export {
  routes
} 

export default router