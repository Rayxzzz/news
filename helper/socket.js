const { io } = require("socket.io-client");


const socket = io("http://localhost:1234", { transports: ['websocket'] });


socket.onAny((event , ...args) => {
    console.log(event, args);
})


export default socket