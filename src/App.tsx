import React from 'react';
import logo from './logo.svg';
import './App.css';
import Custombutton from './components/Custombutton/CustomButton';
import Tablero from './components/Tablero/Tablero';

function App() {
  return (
    <>
    
    <section>
    <Custombutton texto='mensaje' color='warning' ></Custombutton>
    </section>
    <section>
      <Tablero></Tablero>
    </section>
    </>
  );
}

export default App;
