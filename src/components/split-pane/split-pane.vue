<!--  -->
<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: leftOffsetPercent, paddingRight: `${this.triggerWidth / 2}px` }">
      <!-- <button @click="handleClick">ssss</button> -->
      <slot name="left"></slot>
    </div>
    <div class="pane pane-trigger-con" @mousedown="handleMousedown" :style="{ left: triggerLeft, width: `${triggerWidth}px` }"></div>
    <div class="pane pane-right" :style="{ left: leftOffsetPercent, paddingLeft: `${this.triggerWidth / 2}px` }">
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
    /**
     * @description 中间分隔条的宽度
     */
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
  data () {
    return {
      // leftOffset: 0.3,
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value * 100}%`
    },
    triggerLeft () {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    // handleClick () {
    //   this.value -= 0.02
    // },
    handleMousedown (event) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    handleMousemove (event) {
      if (!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width
      // console.log(event.pageX - this.$refs.outer.getBoundingClientRect().left)
      // this.leftOffset = (offset / outerRect.width)
      // console.log('百分比:', this.leftOffset)
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      // this.value = offsetPercent
      this.$emit('input', offsetPercent)
    },
    handleMouseup () {
      this.canMove = false
      // console.log('鼠标按键起来了。')
    }
  }
}

</script>
<style lang='less'>
.split-pane-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  .pane {
    // float:left;
    position: absolute;
    top: 0;
    height: 100%;
    // width: 50%;
    &-left {
      width: 30%;
      background: palevioletred;
    }
    &-right {
      right: 0;
      bottom: 0;
      left: 30%;
      background: paleturquoise;
    }
    &-trigger-con {
      height: 100%;
      background: red;
      top:0;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>
