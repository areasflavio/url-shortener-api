import 'dotenv/config';
import express from 'express';

import { UrlController } from './controllers/UrlController';

const port = process.env.PORT || 3333;

const server = express();

const urlController = new UrlController();

server.use(express.json());

server.post('/shortener', urlController.shortener);
server.get('/:hash', urlController.redirect);

server.listen(port, () => console.log('💻 Server is up on port...', port));
