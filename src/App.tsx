import { useCallback, useEffect, useRef, useState } from 'react'

import styles from './app.module.css'

import Header from './components/Header/Header'
import { Page } from './components/Content/Page'
import { useLoadMore } from './hooks/useLoadMore'

function App() {
  // 1. Create the state to store the items to load.
  const [contents, setContents] = useState<JSX.Element[]>([])

  // 2. Populate it with the initial contents.
  useEffect(() => {
    setContents([<Page />, <Page />, <Page />])
  }, [])

  // 3. Create a ref to the container element.
  const longDivRef = useRef<HTMLDivElement>(null)

  // 4. Use the hook to load more items when the user reach the offset.
  const handleLoad = useCallback(() => {
    setContents((state) => [...state, <Page />])
  }, [])

  const { toBottom, height } = useLoadMore<JSX.Element>({
    handleLoad,
    offset: 100,
    data: contents,
    ref: longDivRef,
  })

  return (
    <>
      <Header toBottom={toBottom} elements={contents.length} height={height} />
      <div ref={longDivRef} className={styles.contents}>
        {contents.map((content) => content)}
      </div>
    </>
  )
}

export default App
