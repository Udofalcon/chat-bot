'use strict';

const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>:)</h1>');
});

server.listen(3000, () => {
    console.log(`Listening on *:3000`);
});
