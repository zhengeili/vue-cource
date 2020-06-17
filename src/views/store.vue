<!--  -->
<template>
  <div>
   <!-- <a-input :value="stateValue" @input="handleStateValueChange"></a-input> -->
   <a-input v-model="stateValue"></a-input>
   <p> {{ stateValue }} -> lastLetter is {{ inputValueLastLetter }} </p>
   <a-show :content="inputValue"></a-show>
   <p>appName: {{ appName }}  , appNameWithVersion: {{ appNameWithVersion }}</p>
   <p>userName:{{ userName }} ,firstLetter is : {{ firstLetter }}</p>
   <button @click="handleChangeAppName">修改appName</button>
   <p>{{ appVersion }}</p>
   <button @click="handleChangeUserName">修改用户名</button>
   <button @click="registerModule">动态注册模块</button>
   <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
      // appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => state.user.todo ? state.user.todo.todoList : []
      // stateValue: state => state.stateValue
    }),
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (value) {
        this.SET_STATE_VALUE(value)
      }
    },
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
    appName () {
      return this.$store.state.appName
    },
    // appName: {
    //   set: function (newValue) {
    //     this.inputValue = newValue + 'sd'
    //   },
    //   get: function () {
    //     return this.inputValue + 'sdfsdf'
    //   }
    // },
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    ...mapMutations([
      'SET_USER_NAME',
      'SET_APP_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (val) {
      this.inputValue = val
    },
    handleChangeAppName () {
      // this.appName = 'newAppName'
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // })
      // this.$store.commit('SET_APP_VERSION')
      // this.SET_APP_NAME({
      //   appName: 'newAppName'
      // })
      this.updateAppName()
    },
    handleChangeUserName () {
      // this.$store.state.user.userName = 'haha'
      this.SET_USER_NAME('vue-cource')
      // this.$store.dispatch('updateAppName', '123')
    },
    registerModule () {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习mutations',
            '学习actions'
          ]
        }
      })
    },
    handleStateValueChange (val) {
      this.SET_STATE_VALUE(val)
    }
  }
}

</script>
