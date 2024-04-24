import React, { useState } from "react";
import './chatwebsocket.css'
import { IoSend } from "react-icons/io5";


function Chatwebsocket(){
    const [mensaje,setMensaje] = useState('');
    const [mensajes, setMensajes] = useState<string[]>([]);
    const [webSocket, setWebAockets] = useState<WebSocket | null>(null)
    return(
        <>
        <div className="chat-container">
            <div className="chat-title">titulo</div>
            <div className="chat-message">
                <div className={'mensaje.azul'}>mensaje{/*hora*/}</div>
                <div className={'mensaje.blanco'}>mensaje{/*hora*/}</div>
            </div>
            <div className="chat-input">
                <input type="text" />
                <IoSend />
                <div className="chat-send">
                </div>
            </div>
        </div>
        </>
    );
}
export default Chatwebsocket;