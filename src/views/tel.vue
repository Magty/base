<template>
  <div class="tel">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    this.$bus.$on('on-click', mes => {
      this.msg = mes
    })
  }
}
</script>

<style>
.tel {
  border: 1px red solid;
}
</style>
