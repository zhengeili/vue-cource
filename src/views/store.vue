<!--  -->
<template>
  <div>
    <a-input @input="handleInput"></a-input>
   <!-- <p> {{ inputValue }} </p> -->
   <a-show :content="inputValue"></a-show>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'

export default {
  name: 'store',
  components: {
    AInput, // 注册组件
    AShow
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}

</script>
