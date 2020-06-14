<!--  -->
<template>
  <div>
    <a-input @input="handleInput"></a-input>
   <p> {{ inputValue }} -> lastLetter is {{ inputValueLastLetter }} </p>
   <a-show :content="inputValue"></a-show>
   <p>appName: {{ appName }}  , appNameWithVersion: {{ appNameWithVersion }}</p>
   <p>userName:{{ userName }} ,firstLetter is : {{ firstLetter }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
 import { mapState, mapGetters } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapGetters } = createNamespacedHelpers('user') // 这里传入一个明明空间

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
  computed: {
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    ...mapState({
      appName: state => state.appName,
      userName: state => state.userName
    }),
    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ]),
    // ...mapGetters([
    //   'firstLetter'
    // ]),
    // firstLetter () {
    //   return this.userName.substr(0, 1)
    // },
    // appName () {
    //   return this.$store.state.appName
    // },
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}

</script>
