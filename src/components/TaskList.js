import React, { useEffect, useState } from 'react';

import Task from './Task';



function TaskList() {

 // const [list,setList] = useState([]);
 // const [tasks, setTask] = useState();

  const taskItems = [
    'Follow Edukasyun ph on Facebook',
    'Follow Edukasyun ph on Twiiteer',
    'Follow Edukasyun ph on Tiktok',
    'Follow Edukasyun ph on Tiktok2',
  ];


  // useEffect(()=>{
  //     setTask()
  // });


  // const inputTask = (e) => {
  //   setTask(e.target.value)
  // }

  // const add = () => {
  //   setList(...list, tasks );
  // }

 // console.log(tasks);
    return (
        <div>
          <input type='text' className='task-input'  />
        
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
