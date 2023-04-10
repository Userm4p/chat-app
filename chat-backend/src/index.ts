import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config/environments";
import routes from "./router";
import http from "http";
import { Server } from "socket.io";

const app = express();

const { PORT } = config;

const server = http.createServer(app);
const chat = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  }
})

chat.on('connection', function(socket){
  console.log(socket.id);
	socket.on('message', function(data){
    console.log(data);
    socket.broadcast.emit('message',data);
     
  }
  );
});

chat.on('disconnect', function(socket){
  console.log('Disconnected');
});




server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);