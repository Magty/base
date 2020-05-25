import axios from 'axios'
import {
  baseURL
} from '@/config'
class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInstanceConfig() {
    const config = {

    }
    return config
  }

  interceptors(instance, url) {
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      // Spin.show()
      if (!Object.keys(this.queue).length) {
        // Spin.show()
      }
      this.queue[url] = true
      return config
    }, err => {
      return Promise.reject(err)
    })
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      const {
        data,
        status
      } = res
      return {
        data,
        status
      }
    }, err => {
      delete this.queue[url]
      return Promise.reject(err)
    })
  }

  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInstanceConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
