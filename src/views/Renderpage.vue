<template>
  <div>
    <!-- <ul @click="handClick">
      <li
        @click.stop="handClick"
        v-for="(item ,index) in list"
        :key="`list_item_${index}`"
      >{{item.name}}</li>
    </ul>-->
    <!-- <list :list="list" :style="{ color: '#9CF'}" :render="renderFunc"></list> -->
    <list :list="list" :style="{ color: '#9CF'}">
      <count-to slot-scope="count" :end-val="count.number">
        <span slot="left">总金额：</span>
        <span slot="right">元</span>
      </count-to>
    </list>
  </div>
</template>

<script>
import List from '_c/list'
import CountTo from '_c/count-to'
export default {
  data() {
    return {
      list: [
        { name: 'Magty', number: 10000 },
        { name: 'Magty1', number: 300 }
      ]
    }
  },
  components: {
    List,
    CountTo
  },
  methods: {
    handClick(event) {
      console.log(event)
    },
    renderFunc(h, name) {
      /* return h(
        'i',
        {
          style: {
            color: '#F90'
          }
        },
        name
      ) */
      return (
        /* <i on-click={this.handClick} style={{ color: '#F93' }}>
          {name}
        </i> */
        <CountTo
          nativeOn-click={this.handClick}
          on-on-animation-end={this.handEnd}
          endVal={name}
          style={{ color: '#F93' }}
        ></CountTo>
      )
    },
    handEnd() {
      console.log('end')
    }
  }
}
</script>

<style>
</style>
