import React, { useEffect, useState } from 'react';

import Task from './Task';



function TaskList() {


  const taskItems = [
    'Follow Edukasyun ph on Facebook',
    'Follow Edukasyun ph on Twiiteer',
    'Follow Edukasyun ph on Tiktok',
    'Follow Edukasyun ph on Tiktok2',
  ];

   const [tasks, setTask] = useState('Jjust another');

  // useEffect(()=>{
  //     setTask()
  // });


  const inputTask = (e) => {
    setTask(e.target.value)
  }

  // const add = () => {
  //   setList(...list, tasks );
  // }

  console.log(tasks);


    return (
        <div>
          <input 
          type='text' 
          className='task-input' 
          placeholder='Create a new task' 
          onChange={inputTask}  
          //value={tasks}
          />
        
          <ul>
          
            { 
             taskItems.map((task, idx) => {
              return (
                  <Task key={idx} taskName={task}/>
                )
              })
            }
          </ul>
      </div>
    )
}



export default TaskList;
