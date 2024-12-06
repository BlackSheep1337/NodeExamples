import express from 'express';
import { users } from './users.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.end('HELLO WORLD!');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  const user = users.find((user) => user.id === userId);

  return user ? res.status(201).json(user) : res.status(400).json({ message: 'User not found' });
});

app.post('/users', (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name && !email && !password) {
    return res.status(400).json({ message: 'Error on request' });
  }
  
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: 'User already created'});
  }
  users.push([{ name, email, password }]);
  return res.status(201).json({ message: 'User successfully saved!' });
});

app
  .listen(8080, 'localhost')
  .on('listening', () => console.log('Listening on port: 8080'));