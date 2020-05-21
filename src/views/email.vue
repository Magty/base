<template>
  <div class="email">
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$bus.$emit('on-click', '1249093124@qq.com')
    }
  },
  mounted() {
    console.log(this.$bus)
  }
}
</script>

<style>
.email {
  border: 1px green solid;
}
</style>
