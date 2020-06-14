<template>
  <div class="email">
    <button @click="handleClick">点我</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.$emit('on-click', 'hello')
    }
  },
  mounted () {
    // console.log(this.$bus)
    this.$on('on-click', mes => {
      console.log(mes)
    })
  }
}
</script>
<style scoped>
.email {
  border: 1px solid green;
}
</style>
