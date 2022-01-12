const fs = require('fs');
const express = require('express');
const url = require('url');
const PORT = 3000;
const HOSTNAME = 'localhost';

const app = express();
app.listen(PORT, HOSTNAME, () => {
    console.log(`server running ${HOSTNAME}:${PORT}`)
});
app.use(express.static('static'))

app.get('/', (request, response) => {
    response.send('index.html');
});