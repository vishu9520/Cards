import { useState } from "react";

export default function Counter(){
   
    let[count,setCount]= useState (0);

   
    function incCount(){
       // setCount(count + 1);  this is async 
       setCount((count)=>{return count+1}); // Thius is  sync way 
  
    }
    return(
        <div>
            <h3>Counter = {count}</h3>
            <button  onClick={incCount}>Increment count</button>
        </div>
    );
} 