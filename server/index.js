/* Core modules / environment config */
require('dotenv').config()
const path = require('path');
const http = require('http')

/* Express */
const express = require('express');
const router = require('./router');

/* Express middleware */
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

/* Utils */
const tunnel = require('../utils/tunnel')

/* Server config */
const app = express();
const server = http.createServer(app)
const PORT = process.env.PORT || 8080;
server.listen(PORT, async () => {
    /* Server is listening! */
    console.log(`Listening at ${PORT}`)
    await tunnel.instance.connect();
    router(app, tunnel)
})

/* Middleware config */
app.use(bodyParser.json({ type: '*/*' }));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(morgan('dev'))
app.use(cors())