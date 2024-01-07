import React, { useState,useReducer } from "react";
import ToDoItem from "./ToDoitem";

 export const ACTIONS ={
  ADD_TODO :'add_todo',
  DONE_TODO :'done_todo',
  DELETE_TODO: 'delete_todo'
}


function reducer(todos, action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos,newTodo(action.payload.inputText)]
    case ACTIONS.DONE_TODO:
      return todos.map(todo =>{
        if(todo.id==action.payload.id){
          return {...todo,complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }

}

function newTodo(inputText){
  return {id : Date.now(), inputText: inputText, complete:false} 
}

function App() {
    const[inputText, setInputText]=useState("");
    const [todos,dispatch]= useReducer(reducer,[]);

    function handleChange(event){
      const newValue= event.target.value;
      setInputText(newValue);

  }
    function handleClick(e){
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO , payload :{inputText:inputText}})
        setInputText("");
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange= {handleChange}type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map(todo => (
            <ToDoItem key={todo.id} todo={todo} dispatch={dispatch}/>
          ) )}
        </ul>
      </div>
    </div>
  );
}

export default App;
