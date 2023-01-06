import React from 'react';
import './App.css';
import {ThemeProvider} from './Context/ThemeContext';
import Functionalcomponent from './Context/Functionalcomponent';


function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <Functionalcomponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
