import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { mergeCartAPI } from '@/apis/cart'
import { useCartStore } from './cartStore'
export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()
    //用户state
    const userInfo = ref({})
    //方法
    //获取用户信息完成登录
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password })
      userInfo.value = res.result
      //合并购物车
      await mergeCartAPI(cartStore.cartList.map((item) => {
        return {
          skuId: item.skuId,
          selected: item.selected,
          count: item.count
        }
      }))
      cartStore.getUpdatedCart()
    }
    //退出登录
    const clearUserInfo = () => {
      userInfo.value = {}
      cartStore.clearCart()
    }

    //对象格式return
    return {
      userInfo,
      getUserInfo,
      clearUserInfo
    }
  },
  {
    persist: true
  }
)