import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//全局指令

app.directive('img-lazy', {
  mounted (el, binding) {
    //el：绑定的元素
    //binding:binding.value:指令等于号后面绑定的表达式的值 v-img-lazy = "" 引号里面的内容
    // console.log(el)
    // console.log(binding)
    useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        // console.log(isIntersecting)
        if (isIntersecting) {
          //进入
          el.src = binding.value
        }
      }
    )

  }
})