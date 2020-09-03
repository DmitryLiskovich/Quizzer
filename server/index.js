const app = require('./routes/app');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_LINK, { useUnifiedTopology: true, useNewUrlParser: true });

const port = process.env.PORT || 2000;

const server = http.createServer(app);

server.listen(port);