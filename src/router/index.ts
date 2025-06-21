import { createRouter, createWebHashHistory } from 'vue-router';
import notOk from '../layout/notFound.vue';
import Home from '@/views/home.vue';

const routeList: any = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/chanyigu',
    name: 'chanyigu',
    component: () => import('@/views/zhongzu/chanyigu.vue')
  },
  {
    path: '/simangdiguo',
    name: 'simangdiguo',
    component: () => import('@/views/zhongzu/simangdiguo.vue')
  },
  {
    path: '/dongshenshitu',
    name: 'dongshenshitu',
    component: () => import('@/views/zhongzu/dongshenshitu.vue')
  },
  {
    path: '/tiantanggang',
    name: 'tiantanggang',
    component: () => import('@/views/zhongzu/tiantanggang.vue')
  },
  {
    path: '/lianyushenyuan',
    name: 'lianyushenyuan',
    component: () => import('@/views/zhongzu/lianyushenyuan.vue')
  },
  {
    path: '/manshikuangye',
    name: 'manshikuangye',
    component: () => import('@/views/zhongzu/manshikuangye.vue')
  },
  {
    path: '/yinmizhe',
    name: 'yinmizhe',
    component: () => import('@/views/zhongzu/yinmizhe.vue')
  },
  {
    path: '/sqchanyigu',
    name: 'sqchanyigu',
    component: () => import('@/views/shenqi/chanyigu.vue')
  },
  {
    path: '/sqsimangdiguo',
    name: 'sqsimangdiguo',
    component: () => import('@/views/shenqi/simangdiguo.vue')
  },
  {
    path: '/sqdongshenshitu',
    name: 'sqdongshenshitu',
    component: () => import('@/views/shenqi/dongshenshitu.vue')
  },
  {
    path: '/sqtiantanggang',
    name: 'sqtiantanggang',
    component: () => import('@/views/shenqi/tiantanggang.vue')
  },
  {
    path: '/sqlianyushenyuan',
    name: 'sqlianyushenyuan',
    component: () => import('@/views/shenqi/lianyushenyuan.vue')
  },
  {
    path: '/sqmanshikuangye',
    name: 'sqmanshikuangye',
    component: () => import('@/views/shenqi/manshikuangye.vue')
  },
  {
    path: '/sqyinmizhe',
    name: 'sqyinmizhe',
    component: () => import('@/views/shenqi/yinmizhe.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: notOk
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routeList
});

// 路由拦截
router.beforeEach((to, from, next) => {
  next();
});

export default router;
