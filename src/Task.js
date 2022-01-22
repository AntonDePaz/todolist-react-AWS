import React from 'react';


function Task(props) {
  return (
        <span>
       <li className='task-item'>{props.a}</li>
       <li className='task-item'>{props.b}</li>
       </span>
  
  )
}


export default Task;
