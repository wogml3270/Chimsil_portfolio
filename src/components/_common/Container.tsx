import React from 'react'

import styles from './Container.module.scss'

const Container = ({ children }: any) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container