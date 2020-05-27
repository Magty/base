/* eslint-disable no-tabs */
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <!-- <b>{{ food }}</b>
    <button @click="handleClick('push')">主页</button>
    <button @click="handleClick('replace')">替换</button>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="getInfo" :style="{ background: bgColor}">请求数据</button>
    <img :src="url" alt />
    <button @click="handLogout">退出登录</button>-->
    <Row>
      <i-col></i-col>
    </Row>
    <Row :gutter="10">
      <i-col span="12"></i-col>
      <i-col span="12"></i-col>
    </Row>
    <Row :gutter="10" class="blue">
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
    </Row>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import { getUserInfo } from '@/api/user'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    /* HelloWorld */
  },
  data() {
    return {
      url: '',
      bgColor: ''
    }
  },
  props: {
    food: {
      type: String,
      default: 'Apple'
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('Home beforeRouterEnter')
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log('home beforeRouteUpdate')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('home beforeRouteLeave ')
    next()
  },
  methods: {
    ...mapActions(['logout']),
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
    },
    getInfo() {
      getUserInfo({ userId: 21 }).then(res => {
        console.log(`res:${res.data}`)
        this.url = res.data.img
        this.bgColor = res.data.color
      })
      /* axios.post('/getUserInfo', { userId: 21 }).then(res => {
        console.log(res)
      }) */
    },
    handLogout() {
      this.logout()
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>
<style lang="less">
.home {
  .ivu-col {
    height: 50px;
    background: palegreen content-box;
    margin-top: 10px;
    /* background-clip: content-box; */
  }
  .blue {
    .ivu-col {
      background: blue content-box;
    }
  }
}
</style>
