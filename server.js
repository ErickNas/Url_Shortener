const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const server = express();
const port = process.env.PORT || 3000;

const indexRouter = require('./src/routes/index');
const spec = YAML.load('./swagger.yml');

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use('/docs', swaggerUI.serve, swaggerUI.setup(spec));
server.use('/', indexRouter);

server.listen(port);

(async () => {
    const database = require('./src/models/db');
    const Schema = require('./src/models/schema');

    await database.sync();
})();