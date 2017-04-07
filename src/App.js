import React from 'react';
import './App.css';
import HelloWorldList from './HelloWorldList';


  

const App = () => {
  //const nameList = ['Jim', 'Sally', 'Bender']
  const json = { nameList: ['Jim', 'Sally', 'Bender'] }


  return (
    <div className="App">
      <HelloWorldList greetings={json.nameList}/>

    </div>
  );
};

export default App;
