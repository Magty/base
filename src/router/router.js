import Home from '@/views/Home.vue'
export default [{
    path: '/',
    name: 'Home',
    alias: '/home_page',
    component: Home

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/argu/:name',
    name: 'Argu',
    component: () => import('@/views/argu.vue')
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
  }
]
