<template>
  <div>
    <li @mousemove.prevent="handMove" v-for="(item,index) in list" :key="`item_${index}`">
      <!-- <span v-if="!render">{{ item.number }}</span>
      <render-dom v-else :render-func="render" :number="item.number"></render-dom>-->
      <slot :number="item.number"></slot>
    </li>
  </div>
</template>

<script>
import RenderDom from '_c/render-dom'
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    RenderDom
  },
  methods: {
    handMove(event) {
      // event.preventDefault()
    }
  }
}
</script>

<style>
</style>
