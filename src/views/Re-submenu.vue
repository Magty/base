<template>
  <a-submenu>
    <div slot="title">{{ parent.title }}</div>
    <template v-for="(item ,idx) in parent.children">
      <a-menu-item v-if="!item.children" :key="`menu_item_${index}_${idx}`">{{ item.title }}</a-menu-item>
      <re-submenu v-else :key="`menu_item_${index}_${idx}`" :parent="item"></re-submenu>
    </template>
  </a-submenu>
</template>

<script>
import menuComponents from '_c/menu'
const { AMenuItem, ASubmenu } = menuComponents
export default {
  name: 'ReSubmenu',
  components: {
    AMenuItem,
    ASubmenu
  },
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>
</style>
