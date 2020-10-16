import React from 'react';
import './App.css';
import BasicClassComponent from './components/BasicClassComponent'
import BasicFunctionalComponent from './components/BasicFunctionalComponent'


function App() {
  return (
    <div className="App">
      {/* <BasicClassComponent></BasicClassComponent> */}
      <BasicFunctionalComponent></BasicFunctionalComponent>
    </div>
  );
}

export default App;
