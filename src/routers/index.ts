import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import goodsList from '../view/goods/goodsList/index.vue'
import layout from '../layout/index.vue'
import Navbar from '../layout/components/Navbar.vue'
import NotFound from '../view/404/index.vue'
import GoodsList from '../view/goods/goodsList/index.vue'
import Classify from '../view/goods/classify/index.vue'
import ToodoList from '../view/goods/toodoList/index.vue'


const routes:Array<RouteRecordRaw & {icon: string}> = [
  {
    path:"/user/login",
    component:import("../view/user/login/index.vue"),
    icon:""
  },
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
      },
      {
        path:"/toodolist",
        component:ToodoList,
        name: '测试todolist'
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

router.beforeEach((to, from, next) => {
  // dispatch('route/addView', route)
  next();
})

export {
  routes
}

function getCookie(name) {
  var prefix = name + "="
  var start = document.cookie.indexOf(prefix)

  if (start == -1) {
    return null;
  }

  var end = document.cookie.indexOf(";", start + prefix.length)
  if (end == -1) {
    end = document.cookie.length;
  }

  var value = document.cookie.substring(start + prefix.length, end)
  return unescape(value);
}


export default router