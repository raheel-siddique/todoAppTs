import React from 'react'
  
 interface Props{
     todoValue:string|number;
     setTodoValue:React.Dispatch<React.SetStateAction<string>>;
     handleAdd:(e:React.FormEvent)=>void;
 }

 const Addtodo=({todoValue, setTodoValue, handleAdd}:Props)=>{
  return (
    <div>
       <h1 className="head">Addtodo</h1> 
    <input type="text" onChange={(event)=>{setTodoValue(event.target.value)}} />
   
     <button type='submit' onClick={handleAdd}>Go</button>

    </div>
  )
}

export default Addtodo