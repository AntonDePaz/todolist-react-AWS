import React from 'react';
import TaskList from './components/TaskList';


const App = () => {

  const paraStyle = {
    "marginBottom" : '15px',
    'color' : 'red'
  };

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
