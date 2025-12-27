import './App.css';
import Counter from './Counter.jsx';
import LikeButton from './LikeButton.jsx';
import Ludo from './LudoBoard.jsx';
// import TodoList from './TodoList.jsx';
import Lottery from './Lottery.jsx';
import {sum} from "./helper";

function App() {
  let winCondition =(ticket)=>{
    return ticket.every((num)=> num===ticket[0]);
  };
 return( <>

    <Lottery n={3} winCondition={winCondition}/>
    
    {/* <LikeButton/> 
    <Counter/> */}
    {/* <Ludo/> */}
    {/* <TodoList/> */}
      {/* <Lottery/> */}
  
 
    </>
 );
}

export default App
