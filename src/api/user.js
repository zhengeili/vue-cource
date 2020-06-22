import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/index/getUserInfo', // 注意这里的url的地址和视频中的不大一种，我调用的是 index这个路由下的getUserInfo方法
    method: 'post',
    data: {
      userId
    }
  })
}
