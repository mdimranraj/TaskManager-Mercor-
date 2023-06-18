import React from 'react'
import styles from '../styles/canvas.module.css';
import Board from '../components/Board';
const Canvas = () => {
  return (
    <div className={styles.canvas}>
        <Board title="To Do" color="#5030E5"/>
        <Board title="On Progress" color="#FFA500"/>
        <Board title="Done" color="#76A5EA"/>
    </div>
  )
}

export default Canvas