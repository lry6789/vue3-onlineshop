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

//删除购物车内容
export function delCartAPI (ids) {
  return httpInstance({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

//合并购物车
export function mergeCartAPI (data) {
  return httpInstance({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}