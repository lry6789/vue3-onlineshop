import httpInstance from '@/utils/http'

//获取购物车
export function getCheckInfoAPI () {
  return httpInstance({
    url: '/member/order/pre',
  })
}
export function createOrderAPI (data) {
  return httpInstance({
    url: '/member/order',
    method: 'POST',
    data
  })
}