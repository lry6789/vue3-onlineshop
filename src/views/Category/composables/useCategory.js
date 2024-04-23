import { useRoute } from "vue-router"
import { ref, watch } from 'vue'
import { getCategoryAPI } from '@/apis/category'
export function useCategory () {
  const route = useRoute()
  const categoryData = ref({})
  const getCategory = async () => {
    // console.log(route.params.id)
    const res = await getCategoryAPI(route.params.id)

    categoryData.value = res.result
    // console.log(categoryData.value)
  }
  getCategory()
  watch(
    () => route.params,
    () => {
      getCategory()

    },
    { immediate: true }
  )
  return {
    categoryData
  }
}

