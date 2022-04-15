import { MutableRefObject, useEffect, useState } from 'react'

type ElementHeightHookParams<T> = {
  ref: MutableRefObject<HTMLElement | null>
  data: T[]
}

// TODO: Get the height of the element without using its contents.

export function useElementHeight<T>({
  ref,
  data,
}: ElementHeightHookParams<T>): number {
  const [height, setHeight] = useState(0)

  const element = ref.current

  useEffect(() => {
    const handleResize = () => {
      setHeight(element?.scrollHeight || 0)
    }
    element?.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      element?.removeEventListener('resize', handleResize)
    }
  }, [data.length, element])

  return height
}
