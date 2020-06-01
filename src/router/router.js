import Home from '@/views/Home.vue'
import Layout from '@/views/Layout.vue'
export default [{
    path: '/',
    name: 'Home',
    alias: '/home_page',
    component: Layout,
    children: [{
      path: 'home',
      name: 'HomeContent',
      component: Home
    }]
    /* props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      if (from.name === 'Login') {
        // alert('来自登录页')
      } else {
        // alert('来自内部页')
      }
      next()
    } */
  },
  {
    path: '/component',
    name: 'Component',
    component: Layout,
    meta: {
      title: '表格'
    },
    children: [{
      path: 'table',
      name: 'TablePage',
      meta: {
        title: '表格'
      },
      component: () => import('@/views/Table.vue')
    }]
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
    path: '/count-to',
    name: 'Countto',
    component: () => import('@/views/CountTo.vue')
  },
  {
    path: '/menu_page',
    name: 'Menu_page',
    component: () => import('@/views/Menu_page.vue')
  },
  {
    path: '/render-page',
    name: 'Renderpage',
    component: () => import('@/views/Renderpage')
  },
  {
    path: '/split-pane',
    name: 'Splitpane',
    component: () => import('@/views/SplitPane.vue')
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
