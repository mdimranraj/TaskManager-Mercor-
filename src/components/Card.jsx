// import React from 'react';
// import { useDrag } from 'react-dnd';
// import styles from '../styles/home.module.css';

// const Card = ({ id, title, index, onDelete, column }) => {
//   const handleDelete = () => {
//     onDelete(id);
//   };

//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: 'CARD',
//     item: { id, index, column },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div
//       className={`${styles.card} ${isDragging ? 'dragging' : ''}`}
//       ref={drag}
//       style={{ opacity: isDragging ? 0.5 : 1 }}
//     >
//       <span className={styles.cardTitle}>{title}</span>
//       <button className={styles.deleteButton} onClick={handleDelete}>
//         X
//       </button>
//     </div>
//   );
// };

// export default Card;

import React from 'react'
import { MoreHorizontal } from 'react-feather'
import styles from '../styles/card.module.css';

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
          <div className={styles.label}>High</div>
          <MoreHorizontal/>
      </div>
      <div className={styles.cardDesc}>
          <h6 className={styles.cardTitle}>BrainStorming</h6>
          <p className={styles.cardDetails}>Brainstorming brings team mennersbs diverse experience into play.</p>
      </div>
      <div className={styles.cardFooter}>
        <img className={styles.cardAvatar} src='./profile3.png'></img>
        <div className={styles.footerRight}>
            <img className={styles.footerIcon} src='./message.png'></img>
            <span>comments</span>
            <img className={styles.footerIcon} src='./file.png'></img>
            <span>3 files</span>
            
        </div>
      </div>
    </div>
  )
}

export default Card
