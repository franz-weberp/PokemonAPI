export function useDebounce() {
  const timeout = ref<number| null>(null)
  const timeDelay:number = 1000

  const debounce = (func: Function) => {
    clearExistingTimeout()
    timeout.value = setTimeout(func, timeDelay)
  }

  const clearExistingTimeout = () => {
    if (timeout.value) {
      clearTimeout(timeout.value)
      timeout.value = null
    }
  }

  return { debounce, clearExistingTimeout }
}
