import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from '@/store'
import {
  setTitle,
  getToken,
  setToken
} from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  /* mode: 'history', */
  routes
})
// const HAS_LOGINED = false
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  const token = getToken()
  if (token) {
    store.dispatch('authorization', token).then(() => {
      if (to.name === 'Login') {
        next({
          name: 'Home'
        })
      } else {
        next()
      }
    }).catch(() => {
      setToken('')
      next({
        name: 'Login'
      })
    })
  } else {
    if (to.name === 'Login') {
      next()
    } else {
      next({
        name: 'Login'
      })
    }
  }
  /* if (to.name !== 'Login') {
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
  } */
})

router.beforeResolve((to, from, next) => {
  next()
})

router.afterEach((to, from) => {

})

export default router
