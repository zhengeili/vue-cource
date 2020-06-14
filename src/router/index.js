import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

Vue.use(VueRouter)

// const routes = [

// ]
const router = new VueRouter({
  routes
})

const HAS_LOGINED = true
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})

// router.beforeResolve()
router.afterEach((to, from) => {
  //
})

// export default new VueRouter({
//   // mode: 'history',
//   routes
// })
export default router
