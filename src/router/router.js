import Home from '../views/Home.vue'
// import path from 'core-js';
// import path from 'core-js'

export default [
  {
    path: '/',
    name: 'home',
    alias: '/home_page',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      // if (from.name === 'about') alert('这是从about页来的')
      // else alert('这不是从about页来的')
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      // food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/count-to',
    name: 'count_to',
    component: () => import('@/views/count-to.vue'),
    props: true
  },
  {
    path: '/menu_page',
    name: 'menu_page',
    component: () => import('@/views/menu-page.vue'),
    props: true
  },
  {
    path: '/render_page',
    name: 'render_page',
    component: () => import('@/views/render-page.vue'),
    props: true
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    component: () => import('@/views/split-pane.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: to => '/'
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
