import { useState } from "react";
export default function TodoList(){
    let [todoList,setTodo]=useState(["Simple task"]);
    let [newTodo,setNewTodo]= useState("");
    
    let updateTodoValue =(event)=>{
       setNewTodo(event.target.value);
    };
    let addNewTask =()=>{
        setTodo([...todoList,newTodo]);
        setNewTodo("");
    }
    return(
        
        <div>
            <input placeholder="add a task" 
            value ={newTodo}
            onChange={updateTodoValue} 
             > </input>
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br /><br />
            <hr />
            <h4>Tasks  Todo</h4>
            <ul>{todoList.map((task)=>(<li>{task}</li>))}</ul>
        </div>
    );
}