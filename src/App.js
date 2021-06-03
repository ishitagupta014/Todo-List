import logo from './logo.svg';
import './App.css';
import ToDoList  from './ToDoList'
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
const App=()=>{
  const [inputList,setInputList]=useState();
  const [item,setItem]=useState([]);
  const itemEvent=(event)=>{
      setInputList(event.target.value);
  }
 const list=()=>{
           setItem((oldItems)=>{
               return [...oldItems,inputList]
           })
           setInputList(" ");
 }
 const deleteItem=(id)=>{
      
                setItem((oldItems)=>{
                          return oldItems.filter((element,index)=>{
                            return index !==id
                          })
                });
 }
  return (
     <>
           <div className="main-div">
                <div className="center-div">
                    <br/>
                    <h1>Todo List</h1>
                    <br/>
                    <input type="text" placeholder="Add today's task" value={inputList} onChange={itemEvent}></input>
                    <button onClick={list} className="add">+</button>
                    <ol>
                         {
                           item.map((value,index)=>{
                                return <ToDoList key={index}
                                 id={index}
                                 text={value}
                                 onSelect={deleteItem}/>
                           }) 
                         }
                    </ol>
                </div>
           </div>
     </>
  );
}

export default App;
