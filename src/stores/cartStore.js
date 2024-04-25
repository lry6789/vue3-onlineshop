import { ref, computed } from 'vue'
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
    const delCart = (skuId) => {
      cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
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
    return {
      cartList,
      allCount,
      allPrice,
      addCart,
      delCart,
      singleCheck,
    }
  },
  {
    persist: true
  }
)