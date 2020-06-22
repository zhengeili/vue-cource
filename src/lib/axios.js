import axios from 'axios'
import { baseURL } from '@/config'
// import { options } from 'less'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }

  interceptors (instance, url) {
    // 拦截器
    instance.interceptors.request.use(config => {
      // 请求拦截器 添加全局的loading
      // IView中的Spin组件 显示加载中
      // console.log(config)
      if (Object.keys(this.queue).length) {
        // Spin.show()
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截器
    instance.interceptors.response.use(res => {
      // console.log(res)
      delete this.queue[url]
      const { data, status } = res
      return { data, status }
      // return res
    }, error => {
      delete this.queue[url] // 如果发生了异常 也需要删除key值
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options) // 两个对象合成一个对象
    this.interceptors(instance, options.url) // 调用拦截去传入实例
    return instance(options)
  }
}
export default HttpRequest
