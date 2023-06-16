import React from 'react'
import styles from '../styles/titlebar.module.css';


const Titlebar = () => {
  return (
    <div className={styles.titlebar}>
        <div className={styles.searchbar}>
            <input type="text" placeholder='🔍 Search for anything...'></input>
        </div>
        <div className={styles.titleImages}>
            <img src='./calendar.png' />
            <img src='./comment.png' />
            <img src='./notification.png' />
        </div>

        <div className={styles.profileDiv}>
            <div className={styles.nameDiv}>
                <span className={styles.name}>Anima Agarwal</span>
                <span className={styles.place}>U.P, India</span>
            </div>
            <img className={styles.profilePic} src='./girl.png'/>
        </div>
    </div>
  )
}

export default Titlebar