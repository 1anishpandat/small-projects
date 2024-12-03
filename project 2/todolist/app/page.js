"use client"
import { ClientPageRoot } from "next/dist/client/components/client-page";
import { useSelectedLayoutSegments } from "next/navigation";
import { comma } from "postcss/lib/list";
import React, { useState } from "react";

const page = () =>{
  const [tittle,settitle] =useState("")
  const [desc,setdesc] =useState("")
  const [mainTask,setmainTask] =useState([])

  
   const submitHandler=(e)=>{
  e.preventDefault()
  setmainTask([...mainTask,{tittle,desc}])
    console.log(tittle)
    console.log(desc)
    settitle("")
    setdesc("")
   console.log(mainTask)
   }

const deleteHandler =(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)

}
   let renderTask = <h2>No Task Available</h2>
   if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
      return <li key={i} className="flex items-center justify-between mb-8">
        <div className="flex justify-between mb-5 w-2/3">
        <h5 className="text-xl font-bold">{t.tittle}</h5>
        <h6 className="text-2xl
        font-medium">{t.desc}</h6>
      </div>
      <button 
      onClick={
        ()=>{deleteHandler(i)}
      }
      className="bg-red-400 text-white px-4 py-2 rounded font-bold">DELETE</button>
      </li>
  
     })
   }
  
return (
<>
<h1 className='bg-black
text-white
p-5 text-5xl font-bold text-center'>My To Do List</h1>
<form onSubmit={submitHandler}>
  <input type="text" className="text-2xl border-zinc-800
  border-2 m-5 px-4 py-2"
  placeholder="ENTER THE TASK HERE"
  value={tittle}
  onChange={(e)=>{
    settitle(e.target.value)
  }}
  />

<input type="text" className="text-2xl border-zinc-800
  border-2 m-5 px-4 py-2"
  placeholder="ENTER THE DESCRIPTION HERE"
  value={desc}
  onChange={(e)=>{
    setdesc(e.target.value)
  }}
  
  />
  <button className="bg-black text-white px-4 py-2 font-bold rounded">ADD TASK</button>
</form>

<hr />
<div className="p-8 bg-slate-200">

<ul>
  {renderTask}
</ul>
</div>
</>
)
}
export default page