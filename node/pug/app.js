const express = require('express');
const path = require('path');
const cricketers = require('./cricketer-data');

const app = express();


app.set('views', path.join(__dirname, 'template'));
app.set('view engine', 'pug');



app.get('/', (req, res) => {
  res.render('cricketers', { cricketers });
});
app.listen(3001);
