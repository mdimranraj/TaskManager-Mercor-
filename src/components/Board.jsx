import React from 'react'
import styles from '../styles/board.module.css';
import Card from './Card';

const Board = (props) => {
  return (
    <div className={styles.board}>
        <div className={styles.boardTop}>
            <div className={styles.boardTopTitle}>
                <div className={styles.dot} style={{backgroundColor:props.color}}></div>
                <div className={styles.title}>{props.title} </div>
                <span>2</span>
            </div>
            <img className={styles.addCard} src='./add-blue.png'></img>
        </div>
        <hr className={styles.boardRule}></hr>
        <div className={`${styles.boardCards} custom-scroll`}>
            <Card/>
            <Card/>
            <Card/>
        </div>

    </div>
  )
}

export default Board