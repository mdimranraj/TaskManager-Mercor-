import React, { useState } from 'react'
import Column from '../components/Column';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import styles from '../styles/home.module.css';
const Home = () => {

    const [columns, setColumns] = useState({
        'To Do': [
          { id: '1', title: 'Task 1' },
          { id: '2', title: 'Task 2' },
        ],
        'On Progress': [{ id: '3', title: 'Task 3' }],
        Done: [],
      });
    
      const handleCardDelete = (cardId, columnTitle) => {
        setColumns((prevColumns) => {
          const updatedColumns = { ...prevColumns };
          const cards = updatedColumns[columnTitle];
          const updatedCards = cards.filter((card) => card.id !== cardId);
          updatedColumns[columnTitle] = updatedCards;
          return updatedColumns;
        });
      };
    
      const handleCardMove = (result) => {
        const { source, destination } = result;
        if (!destination) return;
    
        if (
          source.droppableId === destination.droppableId &&
          source.index === destination.index
        ) {
          return;
        }
    
        setColumns((prevColumns) => {
          const updatedColumns = { ...prevColumns };
          const sourceCards = updatedColumns[source.droppableId];
          const destCards = updatedColumns[destination.droppableId];
          const [movedCard] = sourceCards.splice(source.index, 1);
          destCards.splice(destination.index, 0, movedCard);
          return updatedColumns;
        });
      };

  return (
    <div className={styles.home}>
        <div className={styles.headContainer}>
            <div className={styles.heading}>
                <h1>Mobile App</h1>
                <img className={styles.headImg} src='./arrow-square-up.png'></img>
                <img className={styles.headImg} src='./link.png'></img>
            </div>
            <div className={styles.teams}>
                <img src='./add-blue.png' className={styles.add}></img>
                <span className={styles.teamsText}>Invite</span>
                <img src='./team.png' className={styles.teamsImg}></img>
            </div>
        </div>
        
      <DndProvider backend={HTML5Backend}>
        <div className={styles.columns}>
          {Object.keys(columns).map((columnTitle, index) => (
            <Column
              key={columnTitle}
              title={columnTitle}
              cards={columns[columnTitle]}
              index={index}
              onCardDelete={handleCardDelete}
              onCardMove={handleCardMove}
            />
          ))}
        </div>
      </DndProvider>
    </div>
  )
}

export default Home