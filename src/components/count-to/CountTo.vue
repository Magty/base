<template>
  <div>
    <slot name="left"></slot>
    <span ref="number" :class="countClass" :id="eleId"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'
import './count-to.less'
export default {
  name: 'CountTo',
  data() {
    return {
      counter: null
    }
  },
  computed: {
    eleId() {
      return `count_up_${this._uid}`
    },
    countClass() {
      return ['count-to-number', this.className]
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    delay: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ','
    },
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  methods: {
    getCount() {
      return this.$refs.number.innerText
    },
    emitEndval() {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('on-animation-end', Number(this.getCount()))
        })
      }, this.duration * 1000)
    }
  },
  watch: {
    endVal(newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndval()
      /* setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('on-animation-end', Number(this.getCount()))
        })
      }, this.duration * 1000) */
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.counter = new CountUp(
        this.eleId,
        this.startVal,
        this.endVal,
        this.decimals,
        this.duration,
        {
          useEasing: this.useEasing,
          useGrouping: this.useGrouping,
          separator: this.separator,
          decimal: this.decimal
        },
        setTimeout(() => {
          this.counter.start()
          this.emitEndval()
        }, this.delay)
      )
    })
  }
}
</script>

<style lang="less">
@import './count-to.less';
</style>
