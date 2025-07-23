// src/composables/useDarkMode.ts
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useDark } from '@vueuse/core'

interface UseDarkModeReturn {
  isDarkMode: ReturnType<typeof useDark>
  toggleDarkMode: () => void
  containerClass: ComputedRef<Record<string, boolean | string>>
}

export function useDarkMode(): UseDarkModeReturn {
  const isDarkMode = useDark()
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
  }

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
