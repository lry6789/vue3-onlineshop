import httpInstance from "@/utils/http"
//添加到
export function insertCartAPI ({ skuId, count }) {
  return httpInstance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}
//获取购物车
export function getCartListAPI () {
  return httpInstance({
    url: '/member/cart',
  })
}