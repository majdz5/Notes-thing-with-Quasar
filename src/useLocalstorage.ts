import { ref, watch, onMounted, onUnmounted } from 'vue'

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const value = ref<T>(defaultValue)

  const read = () => {
    const v = window.localStorage.getItem(key)
    if (v !== null) value.value = JSON.parse(v)
  }

  onMounted(() => {
    window.addEventListener('storage', read)
  })

  onUnmounted(() => {
    window.removeEventListener('storage', read)
  })

  watch(value, () => {
    window.localStorage.setItem(key, JSON.stringify(value.value))
  }, { deep: true })

  return value
}
export const useLocalNotes = () => {
  return useLocalStorage('notes', [])
}