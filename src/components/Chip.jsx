import React from 'react'
import { X } from 'react-feather'
import styles from '../styles/chip.module.css';

const Chip = (props) => {
  return (
    <div className={styles.chip} style={{backgroundColor: props.bcolor, color:props.fcolor}}>
        {props.text}
        {/* {props.close && <X />} */}
    </div>
  )
}

export default Chip