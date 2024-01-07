import React from 'react';
import {ACTIONS} from './App';

function ToDoItem({todo,dispatch}){
 return(
    <div onClick ={()=>dispatch( {type: ACTIONS.DONE_TODO, payload :{id:todo.id}})}>
         <li> <p style={{textDecoration: todo.complete ?"line-through":"none"}}> {todo.inputText}</p>
         <button> <span className='todo' onClick ={()=>dispatch( {type: ACTIONS.DELETE_TODO, payload :{id:todo.id}})} >Delete </span></button> </li>
        
         </div>);

}
export default ToDoItem;