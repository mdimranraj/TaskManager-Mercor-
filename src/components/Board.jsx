import React from 'react'
import styles from '../styles/board.module.css';
import { MoreHorizontal } from 'react-feather';
import Card from './Card';

const Board = () => {
  return (
    <div className={styles.board}>
        <div className={styles.boardTop}>
            <p className={styles.boardTopTitle}>
                To Do
                <span>2</span>
            </p>
            <MoreHorizontal/>
        </div>
        <hr className={styles.boardRule}></hr>
        <div className={styles.boardCards}>
            <Card/>
            <Card/>
        </div>

    </div>
  )
}

export default Board