const logger = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  debugger
  console.log(req.body);
  res.send(200);
});


app.listen(3002);
