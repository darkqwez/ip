const net = require('net');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = net.createConnection({port:9000},()=>{
    console.log("CLIENT: I am connected with the Server");
    client.write("Client:Hello Connection is made.");
})

client.on('data',(data)=>{
    console.log(data.toString());
})
client.on("end",()=>{
    console.log("CLIENT: Disconnected");
})

rl.on('line',(input)=>{
    client.write(`CLIENT: ${input}`);
})