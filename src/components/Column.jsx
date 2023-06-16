import React from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';
import styles from '../styles/home.module.css';

const Column = ({ title, cards, onCardDelete, onCardMove }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item) => {
      onCardMove({
        source: { droppableId: item.column, index: item.index },
        destination: { droppableId: title, index: cards.length },
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const handleDelete = (cardId) => {
    onCardDelete(cardId, title);
  };

  return (
    <div className={`${styles.column} ${isOver ? 'highlighted' : ''}`} ref={drop}>
      <h2>{title}</h2>
      <div className={styles.cardList}>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            index={index}
            onDelete={handleDelete}
            column={title}
          />
        ))}
      </div>
    </div>
  );
};


export default Column;
