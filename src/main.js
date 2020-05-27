import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'

/* if (process.env.NODE_ENV !== 'production') {
  require('./mock')
} */

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

/* const handClick = event => {
  console.log(event)
  event.stopPropagation()
}

 const list = [{
  name: 'magty'
}, {
  name: 'kiki'
}]
const getEleArr = h => list.map((item, index) => h('li', {
  on: {
    click: handClick
  },
  key: `list_item_${index}`
}, item.name)) */

new Vue({
  router,
  store,
  /* render: h => h('div', [
    h('ul', {
      on: {
        click: handClick
      }
    }, getEleArr(h))
  ]) */
  render: h => h(App)
  /* render: h => h('div', {
    attrs: {
      id: 'box'
    },
    style: {
      color: 'cyan'
    }
  }, 'Magty') */
}).$mount('#app')
