const express = require('express');
const server = express();
const path = require('path');
const port = process.env.PORT || 3000;

const indexRouter = require('./src/routes/index');

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use('/', indexRouter);

server.listen(port);

(async () => {
    const database = require('./src/models/db');
    const Schema = require('./src/models/schema');

    await database.sync();
})();