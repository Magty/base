<template>
  <div class="split-pane-wrapper" ref="outer">
    <div
      class="pane pane-left"
      :style="{width: leftOffsetPercent,paddingRight:`${this.triggerWidth/2}px`}"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="pane-trigger-con"
      @mousedown="handleMousedown"
      :style="{left: triggerLeft,width: `${triggerWidth}px`}"
    ></div>
    <div
      class="pane pane-right"
      :style="{left: leftOffsetPercent,paddingLeft:`${this.triggerWidth/2}px`}"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data() {
    return {
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent() {
      return `${this.value * 100}%`
    },
    triggerLeft() {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleMousedown(event) {
      this.canMove = true
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset =
        event.pageX - event.srcElement.getBoundingClientRect().left
    },
    handleMouseup() {
      this.canMove = false
    },
    handleMousemove(event) {
      if (this.canMove) {
        var outRect = this.$refs.outer.getBoundingClientRect()
        let offsetPercent =
          (event.pageX -
            this.initOffset +
            this.triggerWidth / 2 -
            outRect.left) /
          outRect.width
        if (offsetPercent < this.min) {
          offsetPercent = this.min
        }
        if (offsetPercent > this.max) {
          offsetPercent = this.max
        }
        // this.$emit('input', offsetPercent)
        this.$emit('update:value', offsetPercent)
      }
    }
  }
}
</script>

<style lang="less">
.split-pane-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  .pane {
    /* float: left;
    width: 50%; */
    position: absolute;
    top: 0;
    height: 100%;
    &-left {
      /* width: 30%; */
      background: palevioletred;
    }
    &-right {
      right: 0;
      bottom: 0;
      /* left: 30%; */
      background: paleturquoise;
    }
    &-trigger-con {
      height: 100%;
      background: red;
      position: absolute;
      top: 0;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>
