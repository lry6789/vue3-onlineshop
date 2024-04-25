import axios from "axios"
import { ElMessage } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from "@/stores/user"
const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeOut: 15000
}
)

//请求拦截器
httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  if (userStore.userInfo.token) {
    config.headers.Authorization = `Bearer ${userStore.userInfo.token}`
  }
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