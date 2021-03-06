// server.js
import express from 'express';
import cors from 'cors';

// import configureRoutes from './config/routes';

const server = express();
const corsOptions = {};

server.use(express.json());
server.use(cors());

// Home Page
server.get('/', (req, res) => {
	res.send(`WEB APP IS RUNNING...`);
});
// configureRoutes(server);

export default server;
