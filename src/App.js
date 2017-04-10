import React from 'react';
import './App.css';
import LevelList from './LevelList';
import LevelObject from './LevelObject';


  

const App = () => {
  //const nameList = ['Jim', 'Sally', 'Bender']
  const json = { nameList: ['Jim', 'Sally', 'Bender'],
  				 nameObject: {'First': 'Annie', 'Second': 'Banana', 'Third': 'Tim'}}

  return (
    <div className="App">
      <LevelObject objectObject={json.nameObject}/>
      <LevelList listObject={json.nameList}/>

    </div>
  );
};

export default App;
