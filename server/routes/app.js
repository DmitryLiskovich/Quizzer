const express = require('express');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser')

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  next();
})

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.disable('x-powered-by');

routes.forEach(item => {
  app.use(item.path, item.func);
})

module.exports = app;