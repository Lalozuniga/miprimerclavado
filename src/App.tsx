import React from 'react';
import logo from './logo.svg';
import './App.css';
import Custombutton from './components/Custombutton/CustomButton';
import Tablero from './components/Tablero/Tablero';
import Chatwebsocket from './components/chatwebsocket/chatwebsocket';

function App() {
  return (
    <>
{/*     
    <section>
    <Custombutton texto='mensaje' color='danger' ></Custombutton>
    </section>
    <section>
      <Tablero></Tablero>
    </section> */}
    <section>
      <Chatwebsocket></Chatwebsocket>
    </section>
      
    </>
  );
}

export default App;
