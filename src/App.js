import React from 'react';

const App = () => {

  const paraStyle = {
    "marginBottom" : '15px',
    'color' : 'red'
  };

  function Tasklist(){
      return (
        <ul>
          <li className='task-item'>Follow Edukasyun ph on Facebook</li>
          <li className='task-item'>Follow Edukasyun ph on Facebook</li>
          <li className='task-item'>Follow Edukasyun ph on Facebook</li>
        </ul>
      )
  }
 
 
  return (
   <div className='app'>
     <div className='app-header'>
        <h2 >My Amazing Todo List App</h2>
        <p style={paraStyle} >The most simple and amazing todo-list app</p>
           <Tasklist />
     </div>
   </div>
  );
};

export default App;
