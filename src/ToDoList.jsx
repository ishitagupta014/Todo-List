import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
const ToDoList=(props)=>{
      
    return (
        <>
             <div className="todo_style">
                 <DeleteIcon className="fa fa-times" 
                 onClick={()=>{
                     props.onSelect(props.id);
                 }}/>
                
                 <li>{props.text}</li>
             </div>
        </>
    )
}
export default ToDoList;