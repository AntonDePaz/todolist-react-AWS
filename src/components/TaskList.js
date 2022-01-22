import React, { useState } from 'react';

import Task from './Task';



function TaskList() {


  const [taskItems, setTaskItems ] = useState([
    'Follow Edukasyun ph on Facebook',
    'Follow Edukasyun ph on Twiiteer',
    'Follow Edukasyun ph on Tiktok',
    'Follow Edukasyun ph on Tiktok2',
  ]);

   const [tasks, setTask] = useState();

  
  const inputTask = (e) => {
    setTask(e.target.value)
  }

  const addTask = (e) => {
    setTaskItems([tasks,...taskItems]);
    setTask('')
  }

  console.log(tasks);

    return (
        <div>
          <input 
          type='text' 
          className='task-input' 
          placeholder='Create a new task' 
          onChange={inputTask}  
          value={tasks}
          onBlur={addTask}
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
