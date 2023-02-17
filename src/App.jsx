import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Dapps from './components/Dapps';


function App () {


  return (
    <div className="App">
      <NavBar action="/" />
      <Dapps/>
      <Footer /> 
    </div>
  );
}

export default App;
