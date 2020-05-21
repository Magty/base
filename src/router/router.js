import Home from '@/views/Home.vue'
export default [{
    path: '/',
    name: 'Home',
    alias: '/home_page',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      if (from.name === 'Login') {
        // alert('来自登录页')
      } else {
        // alert('来自内部页')
      }
      next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'Banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'Argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('@/views/parent.vue'),
    children: [{
      path: 'child',
      name: 'Child',
      component: () => import('@/views/child.vue')
    }]
  },
  {
    path: '/named_view',
    name: 'Namedview',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  /** 重定向路由 */
  {
    path: '/main',
    /* redirect: '/' */
    /* redirect: {
      name: 'Home'
    } */
    /* redirect: to => {
      return {
        name: 'Home'
      }
    } */
    redirect: to => '/'
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('@/views/404.vue')
  }
]
