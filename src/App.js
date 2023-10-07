import React from 'react';
import './App.scss';
import LeftContainer from './components/LeftContainer/LeftContainer';
import RightContainer from './components/RightContainer/RightContainer';

function App() {

  return (
    <div className="App">
      <p className="Mtitle">Welcome to Marleen's Weather App</p>
      <LeftContainer />
      <RightContainer />
    </div>
  );
}

export default App;
