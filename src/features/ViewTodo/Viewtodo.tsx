import React, { useState } from 'react'
interface Props{
    todoValue:string 
    addTodos:string[]
}
const Viewtodo=({todoValue,addTodos}:Props)=>{
    const [line, setLine]=useState<boolean>(false)
    const dleteItems=()=>{
        
        setLine(true)
        console.log("deleted ");
    }
  return (
    <div>
          
            {
                addTodos.map((values)=>{
                    return(
                        <>
                       
                           <h1 style={{textDecoration:line ? "line-through":"none"}}>{values}</h1>
                           <button >Delete</button>
                     
                      
                        </>
                    )
                })
            }
          
       </div>
  )
}
export default Viewtodo;
