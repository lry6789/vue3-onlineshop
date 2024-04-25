import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore(
  'user',
  () => {
    //用户state
    const userInfo = ref({})
    //方法
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password })
      userInfo.value = res.result
    }
    //对象格式return
    return {
      userInfo,
      getUserInfo
    }
  },
  {
    persist: true
  }
)