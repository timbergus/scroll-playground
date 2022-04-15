import { FC } from 'react'

import styles from './header.module.css'

type HeaderProps = {
  toBottom: number
  elements: number
  height: number
}

const Header: FC<HeaderProps> = ({ toBottom, elements, height }) => {
  return (
    <div className={styles.scoreBoard}>
      <div className={`${styles.score} ${styles.left}`}>
        TO BOTTOM: {toBottom}
      </div>
      <div className={styles.score}>{elements}</div>
      <div className={`${styles.score} ${styles.right}`}>HEIGHT: {height}</div>
    </div>
  )
}

export default Header
