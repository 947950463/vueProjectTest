import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import ('@/components/tabbar/HomeContainer')
    },
    {
      path: '/member',
      component: () => import ('@/components/tabbar/MemberContainer')
    },
    {
      path: '/shopcar',
      component: () => import ('@/components/tabbar/ShopcarContainer')
    },
    {
    path: '/search',
    component: () => import ('@/components/tabbar/SearchContainer')
    }
  ],
  linkActiveClass: 'mui-active'  // 覆盖默认的路由高亮的类, 默认的类叫做router-link-active
})
