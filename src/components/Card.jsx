import React from 'react';
import { useDrag } from 'react-dnd';
import styles from '../styles/home.module.css';

const Card = ({ id, title, index, onDelete, column }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id, index, column },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      className={`${styles.card} ${isDragging ? 'dragging' : ''}`}
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <span className={styles.cardTitle}>{title}</span>
      <button className={styles.deleteButton} onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

export default Card;
