<template>
  <div>
    <!-- <a-input v-model.lazy="inputValue"></a-input> -->
    <!-- <a-input @input="handleInput"></a-input> -->
    <!-- <a-input :value="stateValue" @input="handleStateValueChange"></a-input> -->
    <a-input v-model="stateValue"></a-input>
    <div>{{ stateValue }}</div>
    <!-- <div>{{ inputValue}}</div>
    <p>input lastLetter:{{ inputValueLastLetter }}</p>-->
    <a-show :content="inputValue" />
    <p>{{ appName }}</p>
    <p>{{ appNameWithVersion }}</p>
    <!-- <p>{{ userName }}</p> -->
    <p>{{ firstLetter}}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li,index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

/* import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('user') */

export default {
  name: 'store',
  data() {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    /* appName() {
      return this.$store.state.appName
    },
    userName() {
      return this.$store.state.user.userName
    } */
    /* ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName
    }) */
    /* ...mapState(['appName', 'appVersion', 'stateValue']), */
    ...mapState(['appName', 'appVersion']),
    ...mapState({
      todoList: state => (state.todo ? state.todo.todoList : [])
    }),
    stateValue: {
      get() {
        return this.$store.state.stateValue
      },
      set(value) {
        this.SET_STATE_VALUE({ value })
      }
    },
    /* ...mapState({
      userName: state => state.userName
    }) */
    inputValueLastLetter() {
      return this.inputValue.substr(-1)
    },
    ...mapGetters(['appNameWithVersion']),
    ...mapGetters('user', ['firstLetter'])
    /* appNameWithVersion() {
      return this.$store.getters.appNameWithVersion
    } */
  },
  methods: {
    ...mapMutations(['SET_APP_NAME', 'SET_APP_VERSION', 'SET_STATE_VALUE']),
    ...mapActions(['updateAppName']),
    handleInput(val) {
      this.inputValue = val
    },
    handleChangeAppName() {
      // this.$store.commit('SET_APP_NAME', 'newAppName')
      /* this.$store.commit({ type: 'SET_APP_NAME', appName: 'newAppName' })
      this.$store.commit({ type: 'SET_APP_VERSION' }) */
      this.updateAppName()
      /* this.$store.dispatch('updateAppName') */
    },
    registerModule() {
      if (!this.$store.state.todo) {
        this.$store.registerModule('todo', {
          state: {
            todoList: ['学习mutations', '学习actions']
          }
        })
      }
    },
    handleStateValueChange(value) {
      this.SET_STATE_VALUE({ value })
    }
  }
}
</script>

<style>
</style>
