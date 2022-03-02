import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import InputField from './features/addtodo/Addtodo';
import Addtodo from './features/addtodo/Addtodo';
import Viewtodo from './features/ViewTodo/Viewtodo';

const App:React.FC=()=>{
  const [todoValue, setTodoValue]=useState<string>("");
  const [addTodos, setAddTodos]=useState<string[]>([])

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todoValue){
      setTodoValue("");
      setAddTodos([...addTodos, todoValue])
      console.log(addTodos);
    }
   

   
    // console.log(todoValue);
  }
 
 
  return (
    <div className="App"> 
      <Addtodo todoValue={todoValue} setTodoValue={setTodoValue} handleAdd={handleAdd}  />
      <Viewtodo todoValue={todoValue} addTodos={addTodos} />
    </div>
  );
}

export default App;
