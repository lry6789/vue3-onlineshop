import { useIntersectionObserver } from '@vueuse/core'
//懒加载插件
export const lazyPlugin = {
  install (app) {
    app.directive('img-lazy', {
      mounted (el, binding) {
        //el：绑定的元素
        //binding:binding.value:指令等于号后面绑定的表达式的值 v-img-lazy = "" 引号里面的内容
        // console.log(el)
        // console.log(binding)
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            // console.log(isIntersecting)
            if (isIntersecting) {
              //进入
              console.log(isIntersecting)
              el.src = binding.value
              stop()
            }
          }
        )

      }
    })
  }
}