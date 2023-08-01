import express from 'express';
import http from 'http';
import helloWorld from './helloWorld.js';

const app = express();
const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port : http://localhost:${PORT}/`)
})

app.use('/', helloWorld);