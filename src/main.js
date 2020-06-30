import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import CountTo from './components/count-to/index'

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

// const handleClick = event => {
//   console.log(event)
//   event.stopPropagation()
// }
// let list = [{ name: 'lison' }, { name: 'lili' }]
// const getLiEleArr = (h) => {
//   return list.map((item, index) => h('li', {
//     on: {
//       'click': handleClick
//     },
//     key: `list_item_${index}`
//   }, item.name))
// }
new Vue({
  router,
  store, // 挂载到vue的根组件实例上
  // render: h => {
  //   // return h(CountTo, {
  //   //   attrs: {
  //   //     id: 'box'
  //   //   },
  //   //   style: {
  //   //     color: 'red'
  //   //   }
  //   // }, 'lison')
  //   return h(CountTo, {
  //     // 'class': 'count-up wrapper',
  //     'class': [],
  //     props: {
  //       endVal: 100
  //     },
  //     // domProps: {
  //     //   innerHTML: ''
  //     // },
  //     on: {
  //       'on-animation-end': (val) => {
  //         console.log('animation end!')
  //       }
  //     },
  //     nativeOn: {
  //       'click': () => {
  //         console.log('click!')
  //       }
  //     },
  //     directives: [],
  //     slot: '',
  //     key: '',
  //     ref: ''
  //   })
  // }
  // render: h => h('div', [
  //   h('span', '111')
  // ])
  render: h => h(App)
  // render: h => h('div', [
  //   h('ul', {
  //     on: {
  //       'click': handleClick
  //     }
  //   }, getLiEleArr(h))
  // ])
}).$mount('#app')
