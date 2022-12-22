import dotenv from 'dotenv';
import Server from './models/server';

//Configurar las variables de entorno
dotenv.config();

const server = new Server();

server.listen();