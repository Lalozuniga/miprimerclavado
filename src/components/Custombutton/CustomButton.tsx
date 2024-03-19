import React from "react";
import logo from './logo.svg';
import './Custombutton.css';

interface Datos{
    texto:string,
    color:string,

};
function Custombutton({texto,color}:Datos){
    const nombre= `my-button ${color}`;
    return(
        <div className={nombre} >
            {texto}
        </div>
    );

}
export default Custombutton;