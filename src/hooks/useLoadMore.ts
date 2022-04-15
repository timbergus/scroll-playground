import { MutableRefObject, useEffect } from 'react'
import { useElementHeight } from './useElementHeight'
import { useScroll } from './useScroll'

type LoadMoreHookParams<T> = {
  handleLoad: any
  offset: number
  ref: MutableRefObject<HTMLElement | null>
  data: T[]
}

type LoadMoreHookResult = {
  toBottom: number
  height: number
}

export function useLoadMore<T>({
  handleLoad,
  offset,
  ref,
  data,
}: LoadMoreHookParams<T>): LoadMoreHookResult {
  // 1. Get the position from the top.
  const scroll = useScroll()

  // 2. Get the height of the element. It changes when adding new items.
  const height = useElementHeight<T>({ ref, data })

  // 3. Get the distance from the current scroll position to the bottom
  //    of the element.
  const toBottom = Math.abs(scroll + window.innerHeight - height)

  // 4. Launch the load function when the distance is less than the offset.
  useEffect(() => {
    if (toBottom < offset) {
      handleLoad()
    }
  }, [handleLoad, height, offset, toBottom])

  return { toBottom, height }
}
