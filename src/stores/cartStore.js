import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useCartStore = defineStore('cart',
  () => {

    const cartList = ref([])
    const addCart = (goods) => {
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
    return {
      cartList,
      addCart,

    }
  },
  {
    persist: true
  }
)