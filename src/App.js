import React from 'react';
import './App.css';
import LevelList from './LevelList';


  

const App = () => {
  //const nameList = ['Jim', 'Sally', 'Bender']
  const json = { nameList: ['Jim', 'Sally', 'Bender'] }


  return (
    <div className="App">
      <LevelList greetings={json.nameList}/>

    </div>
  );
};

export default App;
