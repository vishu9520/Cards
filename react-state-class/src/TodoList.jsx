import {v4 as uuid4} from "uuid";
import { useState } from "react";
export default function TodoList(){
    let [todoList,setTodo]=useState([{task:"sample-task",id:uuid4()}]);
    let [newTodo,setNewTodo]= useState("");
    
    let updateTodoValue =(event)=>{
       setNewTodo(event.target.value);
    };
    let addNewTask =()=>{

        setTodo((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuid4()}];
        });
        setNewTodo("");
    }
    let deleteTodo=(id)=>{
        console.log("id to delete",id);
       setTodo((prevTodos)=>prevTodos.filter((prevTodos)=>prevTodos.id!=id));
    }
   let upperCaseAll =()=>{
    setTodo((prevTodos)=> prevTodos.map((todo)=>{
        return {task: todo.task.toUpperCase(), id: todo.id};
    }));
   };
  let upperCaseOne =(id)=>{
    setTodo((prevTasks)=>
    prevTasks.map((todo)=>{
        if(todo.id===id){
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            };
        }
        else{
            return todo;
        }
    }))
  };
    
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
            <ul>{todoList.map((todo)=>(
                <li key={todo.id}>
                  <span>{todo.task}</span>  
                  &nbsp; &nbsp; &nbsp; 
                  <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                  &nbsp; 
                  <button onClick={()=>upperCaseOne(todo.id)}>UpperCase</button>
                    </li>
                ))}
                </ul>
                <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    );}