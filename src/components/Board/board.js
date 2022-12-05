import { useState } from "react";
import Square from "../Square/square";
import './board.css'

const Board = () => {
    //! El turno lo vamos a guardar en un estado para que cada vez que cambie el turno, cambie el estado, y cambie la interfaz visual
    const [turn, setTurn] = useState('X')
    //! Status del juego
    const [game, setGame] = useState(['','','','','','','','',''])
    //!  getter / setter
    function handleGame (position){
      if(game[position]!= '') return
      //! NO game[position] = 'X'
      const gameUpdated = game;
      gameUpdated[position] = turn;
      setGame(gameUpdated)
      if(turn==='X'){
        setTurn('O')
      }else{
        setTurn('X')
      }
    }
  
    let gameStatus;
    let flag = false;
    function handleStatus(){
      const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
      lines.forEach(([x,y,z])=>{
        console.log('1',game[x]==game[y]);
        console.log('2',game[y]==game[z]);
        console.log('3',game[x]!='');
        if(game[x]==game[y] && game[y]==game[z] && game[x]!=''){
          gameStatus='GANÓ ' + game[x]
          flag=true;
        }else{
          if(!flag)
          gameStatus='Juega ' + turn
        }
      })
      console.log(gameStatus);
    }
    handleStatus();
    return (
      <>
      <div className="board">
        <Square action={()=>handleGame(0)} status={game[0]}/>
        <Square action={()=>handleGame(1)} status={game[1]}/>
        <Square action={()=>handleGame(2)} status={game[2]}/>
        <Square action={()=>handleGame(3)} status={game[3]}/>
        <Square action={()=>handleGame(4)} status={game[4]}/>
        <Square action={()=>handleGame(5)} status={game[5]}/>
        <Square action={()=>handleGame(6)} status={game[6]}/>
        <Square action={()=>handleGame(7)} status={game[7]}/>
        <Square action={()=>handleGame(8)} status={game[8]}/>
      </div>
      <div>{gameStatus}</div>
      </> 
     );
  }
   
  export default Board;