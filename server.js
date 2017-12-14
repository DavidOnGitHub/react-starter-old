const express = require('express');
const path = require('path');

const server = express();
const port = 3000;
server.use(express.static(__dirname + '/'));
server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

server.listen(port, (err) => {
    if (err) {
        console.log(`error happened: ${err}`);
    } else {
        console.log(`listening on port ${port}`);
    }
});
