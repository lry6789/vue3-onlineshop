import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'
export const useCountdown = () => {
  const time = ref(0)
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  const start = (curretTime) => {
    time.value = curretTime
    const timer = setInterval(() => {
      time.value--
    }, 1000)
    onUnmounted(() => {
      clearInterval(timer)
    })
  }
  return {
    formatTime,
    start,
  }
}
