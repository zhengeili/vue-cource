import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex) // Vuex做为vue的插件，需要使用Vue.use()这个方法把它加载进来。
// 加载进来后创建Vuex.store来创建实例
export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: [saveInLocal]
})
