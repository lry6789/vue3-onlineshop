import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './userStore'
import { insertCartAPI, getCartListAPI, delCartAPI } from '@/apis/cart'
export const useCartStore = defineStore('cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    const cartList = ref([])


    //获取购物车列表
    const getUpdatedCart = async () => {
      const res = await getCartListAPI()
      cartList.value = res.result
    }

    const addCart = async (goods) => {
      if (isLogin.value) {
        //登录
        const { skuId, count } = goods
        await insertCartAPI({ skuId, count })
        getUpdatedCart()
      }
      else {
        //本地s
        //添加购物车操作
        //有+1 无新增1
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          item.count += goods.count
        }
        else {
          cartList.value.push(goods)
        }
        // console.log(cartList.value)
      }

    }
    const delCart = async (skuId) => {
      if (isLogin.value) {
        await delCartAPI([skuId])
        getUpdatedCart()
      }
      else {
        cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
      }

    }
    //总数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    //总价格
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.price * c.count, 0))

    //单选功能
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }
    //是否全选

    const isAll = computed(() => cartList.value.every((item) => item.selected === true))
    //全选功能
    const allCheck = (selected) => {
      cartList.value.forEach((item) => item.selected = selected)

    }
    //已选择价格与数量
    const selectCount = computed(() => cartList.value.filter((item) => item.selected === true).reduce((a, c) => a + c.count, 0))
    const selectPrice = computed(() => cartList.value.filter((item) => item.selected === true).reduce((a, c) => a + c.price * c.count, 0))

    const clearCart = () => {
      cartList.value = []
    }
    return {
      cartList,
      allCount,
      allPrice,
      selectCount,
      selectPrice,
      isAll,
      addCart,
      delCart,
      singleCheck,
      allCheck,
      clearCart,
    }
  },
  {
    persist: true
  }
)