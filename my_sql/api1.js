var express = require('express');
var connection = require('./api_connection');
var app = express();
app.get("/", function (request, response) {
     response.json({ 'message': 'This is home page' });
});
app.get('/category', function (request, response) {
     sql = "SELECT * from category ";
     connection.con.query(sql, function (error, result, fields) {
          if (error)
               response.json({ 'error': error })
          else {
               var output = JSON.parse(JSON.stringify(result));
               response.json(output);
          }
     });
     connection.con.end();
});
app.listen(5000);