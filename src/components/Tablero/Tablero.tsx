import React from "react";
import './Tablero.css';
import Custombutton from "../Custombutton/CustomButton";

interface Datos{
    texto:string,
    color:string,

};
 function Tablero(){

    return(
        <div className="tablero">
            <div className="columna">
            <Custombutton texto='mensaje' color='warning' ></Custombutton>
            <Custombutton texto='mensaje' color='warning' ></Custombutton>
            <Custombutton texto='mensaje' color='warning' ></Custombutton>
            </div>
            <div className="columna">
            <Custombutton texto='mensaje' color='warning' ></Custombutton>
            <Custombutton texto='mensaje' color='warning' ></Custombutton>
            <Custombutton texto='mensaje' color='warning' ></Custombutton>
            </div>
            <div className="columna">
            <Custombutton texto='mensaje' color='warning' ></Custombutton>
            <Custombutton texto='mensaje' color='warning' ></Custombutton>
            <Custombutton texto='mensaje' color='warning' ></Custombutton>
            </div>
        </div>
    );

}
export default Tablero;