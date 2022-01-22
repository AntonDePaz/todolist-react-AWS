import React from 'react';
import TaskList from './components/TaskList';


const App = () => {

  const paraStyle = {
    "marginBottom" : '15px',
    'color' : 'red'
  };

  // function Task(props){

  //   return (
  //     <>
  //       <li className='task-item'>{props.taskName}</li>
  //     </>
  //   )
  // }

  // function TaskList(){
    
  //   const taskItems = [
  //     'Follow Edukasyun ph on Facebook',
  //     'Follow Edukasyun ph on Twiiteer',
  //     'Follow Edukasyun ph on Tiktok',
  //     'Follow Edukasyun ph on Tiktok2',
  //   ];

  //     return (
  //         <div>
  //           <input type='text' className='task-input' />
  //           <ul>
            
  //             { 
  //               taskItems.map((task, idx) => {
  //               return (
  //                   <Task key={idx} taskName={task}/>
  //                 )
  //               })
  //             }
  //           </ul>
  //       </div>
  //     )
  // }


 
  return (
   
   <div className='app'>
     <div className='app-header'>
        <h2 >My Amazing Todo List App</h2>
        <p style={paraStyle} >The most simple and amazing todo-list app</p>
           <TaskList/>
     </div>
   </div>
  );
};

export default App;
