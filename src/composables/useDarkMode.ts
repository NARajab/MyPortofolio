// src/composables/useDarkMode.ts
import { computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

interface UseDarkModeReturn {
  isDarkMode: ReturnType<typeof useDark>
  toggleDarkMode: ReturnType<typeof useToggle>
  containerClass: ReturnType<typeof computed>
}

export function useDarkMode(): UseDarkModeReturn {
  const isDarkMode = useDark()
  const toggleDarkMode = useToggle(isDarkMode)

  const containerClass = computed(() => ({
    'font-family': 'Poppins',
    'container-dark-theme': isDarkMode.value,
    'container-light-theme': !isDarkMode.value
  }))

  return {
    isDarkMode,
    toggleDarkMode,
    containerClass
  }
}
