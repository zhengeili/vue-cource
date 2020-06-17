export default store => {
  console.log('store 初始化了')
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {
    // console.log('提交mutation')
    localStorage.state = JSON.stringify(state)
  })
}
