import React, { useState } from 'react'
import styles from '../styles/canvas.module.css';
import Board from '../components/Board';
const Canvas = () => {

    const [boards,setBoards] = useState([
        {
          id:1,
          title:"To Do",
          dotcolor:"#5030E5",
          cards:[
            {
              id:"c1",
              title:"Brainstorming",
              task:[],
              label:[{
                text:"Low",
                backColor:"rgba(223, 168, 116, 0.2)",
                fontColor:"#D58D49"
              }],
              desc:"Brainstorming brings team members' diverse experience into play. ",
              pic:"./profile3.png"
            },
            {
              id:"c2",
              title:"Research",
              task:[],
              label:[{
                text:"High",
                backColor:"rgba(216, 114, 125, 0.1)",
                fontColor:"#D8727D"
              }],
              desc:"User research helps you to create an optimal product for users.",
              pic:"./profile3.png"
            },
            {
              id:"c3",
              title:"Wireframes",
              task:[],
              label:[{
                text:"High",
                backColor:"rgba(216, 114, 125, 0.1)",
                fontColor:"#D8727D"
              }],
              desc:"Low fidelity wireframes include the most basic content and visuals.",
              pic:"./profile3.png"
            }
          ]
        },
        {
            id:2,
            title:"On Progress",
            dotcolor:"#FFA500",
            cards:[
                {
                    id:"c4",
                    title:"Onboarding Illustrations",
                    task:[],
                    label:[{
                        text:"Low",
                        backColor:"rgba(223, 168, 116, 0.2)",
                        fontColor:"#D58D49"
                    }],
                    desc:"apple is great kjskjkfajl",
                    pic:"./profile3.png"
                  },
                  {
                    id:"c5",
                    title:"Moodboard",
                    task:[],
                    label:[{
                        text:"Low",
                        backColor:"rgba(223, 168, 116, 0.2)",
                        fontColor:"#D58D49"
                    }],
                    desc:"apple is great kjskjkfajl",
                    pic:"./profile4.png"
                  },  
            ]
        },
        {
        id:3,
        title:"Done",
        dotcolor:"#76A5EA",
        cards:[
            {
                id:"c6",
                title:"Mobile App Design",
                task:[],
                label:[{
                    text:"Completed",
                    backColor:"rgba(131, 194, 157, 0.2)",
                    fontColor:"#68B266"
                }],
                desc:"apple is great kjskjkfajl",
                pic:"./profile4.png"
              }, 
              {
                id:"c7",
                title:"Design System",
                task:[],
                label:[{
                    text:"Completed",
                    backColor:"rgba(131, 194, 157, 0.2)",
                    fontColor:"#68B266"
                }],
                desc:"It just needs to adapt the UI from what you did before ",
                pic:"./profile3.png"
              },   
        ]
        }
      ]);

    const [targetCard, setTargetCard] = useState({
        cid: "",
        bid: "",
    });

    
    const addCard = (title, bid)=>{
        const card = {
            id: Date.now() + Math.random(),
            title,
            label:[],
            desc:"",
            pic:""
        };
        const index = boards.findIndex(item=>item.id===bid)
        if(index<0) return;

        const tempBoards = [...boards]
        tempBoards[index].cards.push(card);
        setBoards(tempBoards);
    }  
    const removeCard=(cid,bid)=>{
        const bIndex = boards.findIndex(item=>item.id===bid)
        if(bIndex<0) return;
        const cIndex = boards[bIndex].cards.findIndex(item=>item.id===bid)
        if(cIndex<0) return;

        const tempBoards = [...boards]
        tempBoards[bIndex].cards.splice(cIndex,1);
        setBoards(tempBoards);

    }
    const addBoard = (title)=>{
        setBoards([
            ...boards,
            {
                id:Date.now()+Math.random(),
                title,
                cards:[],
            }
        ])
    }

    const removeBoard = (bid)=>{
        const tempBoards = boards.filter(item=>item.id !== bid)
        setBoards(tempBoards);

    }

    const handleDragEnter = (cid, bid)=>{
        if(targetCard.cid === cid) return;
        setTargetCard({
            cid,
            bid
        })
    }
    const handleDragEnd = (cid,bid)=>{
        let s_bIndex, s_cIndex, t_bIndex, t_cIndex;

        s_bIndex = boards.findIndex(item=>item.id === bid)
        if(s_bIndex < 0) return
        
        s_cIndex = boards[s_bIndex].cards?.findIndex(item=>item.id === cid)
        if(s_cIndex < 0) return

        t_bIndex = boards.findIndex(item=>item.id === targetCard.bid)
        if(t_bIndex < 0) return
        
        t_cIndex = targetCard.cid === "" ? 0 : boards[t_bIndex].cards?.findIndex(item=>item.id === targetCard.cid)
        if(t_cIndex < 0) return

        const tempBoards=[...boards]
        const sourceCard = tempBoards[s_bIndex].cards[s_cIndex]
       
        tempBoards[s_bIndex].cards.splice(s_cIndex, 1) //removed the card form source
        // const newBoard = tempBoards[s_bIndex].cards.filter((item,index)=> index !== s_cIndex)
        // tempBoards[s_bIndex].cards = [];
       
        console.log("targetCard: " + targetCard.cid + " targetboard: " + targetCard.bid);
       
        console.log("source board index: " + s_bIndex + " target board index: " + t_bIndex);

        console.log("source card index: " + s_cIndex + " target card index: " + t_cIndex);
        console.log(tempBoards) 
        tempBoards[t_bIndex].cards.splice(t_cIndex,0,sourceCard) // add the new card to target Board 

        setBoards(tempBoards)

        setTargetCard({
            cid: "",
            bid: "",
          });
    }


  return (
    <div className={styles.canvas}>
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
        <div className={styles.second}>
            <div className={styles.secondLeft}>
                <img src='./filter.png'/>
                <img src='./today.png'/>
            </div>
            <div className={styles.secondRight}>
                <img className={styles.share} src='./share.png'/>
                <img className={styles.line} src='./line.png'/>
                <img className={styles.blueEqual} src='./blue-equal.png'/>
                <img className={styles.dotMenu} src='./dotmenu.png'/>
            </div>
        </div>
        <div className={styles.boards}>
        {
            boards.map( item=> <Board key={item.id} title={item.title} color={item.dotcolor} board={item} handleDragEnd={handleDragEnd} handleDragEnter={handleDragEnter}/>)
        }
        </div>
        

        {/* <Board title="To Do" color="#5030E5"/>
        <Board title="On Progress" color="#FFA500"/>
        <Board title="Done" color="#76A5EA"/> */}
    </div>
  )
}

export default Canvas