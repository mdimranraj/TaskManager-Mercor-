import React from 'react'
import styles from '../styles/canvas.module.css';
import Board from '../components/Board';
const Canvas = () => {
  return (
    <div className={styles.home}>
        <Board/>
        <Board />
        <Board/>
    </div>
  )
}

export default Canvas