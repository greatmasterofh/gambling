import { useMediaQuery } from '@vueuse/core'

export function useMobile() {
  return useMediaQuery('(max-width: 1280px)')
}
