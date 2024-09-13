// Importing necessary libraries
"use client"
import React, { useState } from 'react'

// Main component
const page = () => {
  // State variables for title, description, and main tasks
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  // Function to prevent form refresh and handle task addition
  const submitPreventRfrsh = (button) => {
    button.preventDefault();
    console.log(title,desc);
    settitle("");
    setdesc("");
    setmainTask([...mainTask,{title,desc}]);
    console.log(mainTask);
  }

  // Initial empty task message
  let empty = <h2 className='text-blue-600 text-4xl py-8 font-bold bg-red-300 mt-20 text-center'>No Task Is Available</h2>

  // If tasks exist, map through them and display them
  if(mainTask.length > 0) {
    empty = mainTask.map((task,i) => {
      // Function to delete a task
      let delt = (i) => {
        let copyTask = [...mainTask]
        copyTask.splice(i,1);
        setmainTask(copyTask);
      }

      // Return JSX for each task
      return (
        <ul key={i} className='mb-12 bg-slate-300 mt-20'>
          <div className='flex justify-between items-center'>
            <h1 className=' text-4xl py-5 font-bold text-red-600 ml-8'>{task.title}</h1>
            <p className=' text-2xl py-7 italic ml-64'>{task.desc}</p>
            <button key={i} onClick={() => {delt(i)}} className='text-2xl my-6 p-2 rounded font-bold text-white bg-orange-500 mr-8 hover:bg-orange-400'>Delete</button>
          </div>
        </ul>
      )
    })
  }

  // Return JSX for the page
  return (
    <>
      <h1 className='text-5xl p-5 font-bold italic bg-black text-white text-center'>Xisan's Todo List</h1>
      <form onSubmit={submitPreventRfrsh}>
        <input className='text-2xl h-12 p-2 m-5 outline-none border-2 border-black w-80 rounded-md' type='search' placeholder='Enter Title Here' value={title} onChange={(e) => {settitle(e.target.value)}} />
        <input className='text-2xl h-12 p-2 m-5 outline-none border-2 border-black w-80 rounded-md' type='search' placeholder='Enter Description Here' value={desc} onChange={(e) => {setdesc(e.target.value)}} />
        <button className='text-2xl px-7 py-2 m-4 font-bold border-2 border-gray-500 rounded-md text-white bg-black hover:bg-slate-900' id='btn'>Add</button>
      </form>
      <hr/>
      {empty}
    </>
  )
}

// Exporting the component
export default page