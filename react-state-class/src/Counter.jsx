import { useState } from "react";

export default function Counter(){
   
    let[count,setCount]= useState (0);

   
    function incCount(){
        setCount(count + 1);
        console.log(count);
    }
    return(
        <div>
            <h3>Counter = {count}</h3>
            <button  onClick={incCount}>Increment count</button>
        </div>
    );
} 