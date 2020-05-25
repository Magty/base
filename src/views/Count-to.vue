<template>
  <div>
    <count-to ref="countTo" :end-val="endVal" @on-animation-end="handEnd">
      <span slot="left">总金额：</span>
      <span slot="right">元</span>
    </count-to>
    <button @click="getNumber">获取数值</button>
    <span>{{ curNum }}</span>
    <button @click="updateEndval">更新值</button>
  </div>
</template>

<script>
import CountTo from '@/components/count-to'
export default {
  name: 'count_to',
  data() {
    return {
      curNum: 0,
      endVal: 100
    }
  },
  components: {
    CountTo
  },
  methods: {
    getNumber() {
      this.curNum = this.$refs.countTo.getCount()
    },
    updateEndval() {
      this.endVal += Math.random() * 100
    },
    handEnd(endVal) {
      console.log(endVal)
    }
  }
}
</script>

<style></style>
