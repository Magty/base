import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import {
  setTitle
} from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  /* mode: 'history', */
  routes
})
const HAS_LOGINED = true
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'Login') {
    if (HAS_LOGINED) {
      next()
    } else {
      next({
        name: 'Login'
      })
    }
  } else {
    if (HAS_LOGINED) {
      next({
        name: 'Home'
      })
    } else {
      next()
    }
  }
})

router.beforeResolve((to, from, next) => {
  next()
})

router.afterEach((to, from) => {

})

export default router
