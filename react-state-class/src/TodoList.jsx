import {v4 as uuid4} from "uuid";
import { useState } from "react";
export default function TodoList(){
    let [todoList,setTodo]=useState([{task:"sample-task",id:uuid4(),isDone:false}]);
    let [newTodo,setNewTodo]= useState("");
    
    let updateTodoValue =(event)=>{
       setNewTodo(event.target.value);
    };
    let addNewTask =()=>{

        setTodo((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuid4(),isDone:false}];
        });
        setNewTodo("");
    }
    let deleteTodo=(id)=>{
        console.log("id to delete",id);
       setTodo((prevTodos)=>prevTodos.filter((prevTodos)=>prevTodos.id!=id));
    }
   let marksAllDone =()=>{
    setTodo((prevTodos)=> prevTodos.map((todo)=>{
        return {...todo,isDone:true,};
    }));
   };
  let marksAsDone =(id)=>{
    setTodo((prevTasks)=>
    prevTasks.map((todo)=>{
        if(todo.id===id){
            return{
                ...todo,
                isDone:true,
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
                  <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>  
                  &nbsp; &nbsp; &nbsp; 
                  <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                  &nbsp; 
                  <button onClick={()=>marksAsDone(todo.id)}>Marks as Done</button>
                    </li>
                ))}
                </ul>
                <button onClick={marksAllDone}>Marks All as Done</button>
        </div>
    );}