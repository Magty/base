/* eslint-disable no-tabs */
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="handleClick('push')">主页</button>
    <button @click="handleClick('replace')">替换</button>
    <button @click="handleClick('back')">返回上一页</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type) {
      if (type === 'back') {
        this.$router.go(-1)
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'About'
        })
      } else {
        const name = 'Magty'
        this.$router.push({
          /* name: 'Parent',
          query: {
            name: 'Magty'
          } */
          /* name: 'Argu',
          params: {
            name: 'Magty'
          } */
          path: `/argu/${name}`
        })
      }
    }
  }
}
</script>
