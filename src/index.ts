import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { MongoConnection } from './database/MongoConnection';
import { UrlController } from './controllers/UrlController';

const port = process.env.PORT || 3333;

const server = express();
server.use(cors());
server.use(express.json());

const database = new MongoConnection();
database.connect();

server.get('/', (req, res) => {
  return res.json({ message: 'This is URLshortener APP' });
});

const urlController = new UrlController();
server.post('/shortener', urlController.shortener);
server.put('/update', urlController.updateURL);
server.get('/latestURLs', urlController.latestURLs);
server.get('/:hash', urlController.redirect);

server.listen(port, () => console.log('💻 Server is up on port...', port));
