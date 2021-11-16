'use strict';

const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.get('/*', (req, res) => {
    var dir = '/public';

    res.sendFile(`${__dirname}${dir}${req.url}`);
});

server.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on *:${process.env.PORT || 3000}`);
});
