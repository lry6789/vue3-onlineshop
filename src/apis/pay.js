import httpInstance from '@/utils/http'

//获取购物车
export function getOrderAPI (id) {
  return httpInstance({
    url: `/member/order/${id}`,
  })
}