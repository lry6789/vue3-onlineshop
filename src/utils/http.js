import axios from "axios"
import { ElMessage } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { useRouter } from 'vue-router'
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
  , e => {
    //统一错误提示
    ElMessage({
      type: 'warning',
      message: e.response.data.msg
    })
    return Promise.reject(e)
  })

export default httpInstance