<template>
  <!-- <div>{{ $route.params.name }}</div> -->
  <div>{{ name }}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: [String],
      default: 'Magty'
    }
  }
}
</script>

<style></style>
