import Image from "./Image.vue"
import XtxSku from './XtxSku/index.vue'
//components组件全局注册
export const componentsPlugin = {
  install (app) {
    app.component('Image', Image)
    app.component('XtxSku', XtxSku)
  }
}
