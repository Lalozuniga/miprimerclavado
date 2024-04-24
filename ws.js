const webSocket = require('ws')
//wss --> web socket server
const wss= new webSocket.Server({port:8043});

wss.on('connection',(ws)=>{
    //ws es un usu;ario
    console.log('usuario nuevo conectado');
    ws.on('message', (data)=>{
        console.log('data');
        wss.clients.forEach((client)=>{
            if(client !== wss && client.readyState === webSocket.OPEN){
                client.send(data);
            }
        });
    });
    ws.on('close',()=>{
        console.log('el usuario se desconecto')
    });
});

console.log('Ws prendido:\n')