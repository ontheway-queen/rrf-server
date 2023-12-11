import { Application } from 'express';
import { Server } from 'socket.io';
import http from 'http';
export let io: Server;

export const socketServer = (app: Application) => {
  const server = http.createServer(app);
  io = new Server(server, {
    path: '/api/socket',
    cors: {
      origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://www.rrfmart.com',
        'https://rrfmart.com',
        'https://www.admin.rrfmart.com',
        'https://admin.rrfmart.com',
      ],
      credentials: true,
    },
  });
  return server;
};
