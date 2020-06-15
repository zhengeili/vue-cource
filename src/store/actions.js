import { getAppName } from '@/api/app'
const actions = {
  // updateAppName ({ commit }) {
  //   getAppName().then((res) => {
  //     // console.log(res)
  //     const { info: { appName } } = res
  //     commit('SET_APP_NAME', appName)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }
  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (error) {
      console.log(error)
    }
  }
}
export default actions
