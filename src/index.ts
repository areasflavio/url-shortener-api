import express from 'express';

const server = express();

const port = process.env.PORT || 3333;

server.use(express.json());

server.get('/', (req, res) => {
  return res.json({ hello: 'World' });
});

server.listen(port, () => console.log('💻 Server is up on port...', port));
