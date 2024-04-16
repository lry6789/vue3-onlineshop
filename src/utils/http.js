import axios from "axios"

const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeOut: 15000
}
)

//请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))
//响应拦截器
httpInstance.interceptors.response.use(res => res.data
  , e => { return Promise.reject(e) })

export default httpInstance