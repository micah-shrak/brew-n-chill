// server.js
import express from 'express';
import cors from 'cors';

import configureRoutes from './config/routes';

const server = express();
const corsOptions = {};

server.use(express.json());
server.unsubscribe(cors());

configureRoutes(server);

module.exports = { server };
