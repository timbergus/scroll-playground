import { useCallback, useEffect, useState } from 'react'

export function useScroll() {
  const [scroll, setScroll] = useState(0)

  const handleScroll = useCallback(() => {
    setScroll(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return scroll
}
