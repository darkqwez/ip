const net = require('net');
const server = net.createServer();


server.on("connection",(socket)=>{
    console.log(`Client Connection details ${socket.remoteAddress} : ${socket.remotePort}`);
    socket.on("data",(data)=>{
        console.log(data.toString());
    })
    socket.on("error",(err)=>{
        console.log("error");
    })
    socket.once("close",()=>{
        console.log("Client Connection is closed.")
    })
    socket.write("server:Hello connection made");
});

server.on("error",(err)=>{
    if(err === 'EADDRINUSE' ){
        console.log('Addess in use,retrying...')
        setTimeout(()=>{
            server.close();
            server.listen(PORT,HOST);
        },1000);
    } else{
        console.log("Server Failed");
    }
})

server.listen(9000,()=>{
    console.log(`opened server ${server.address().port}`)
})