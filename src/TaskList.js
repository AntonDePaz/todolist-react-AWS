import React from 'react';
import Task from './Task';




function TaskList(props) {

    const a = props.a;
    const b = props.b;
  return (
  
<        ul>
            <Task a={a} />
            <Task b={b} />
        </ul>
 
  )
}



export default TaskList;
