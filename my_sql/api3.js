var connection = require('./api_connection');
var express = require('express');
var bodyParser  = require('body-parser');
var app = express();
app.use(express.json());
app.use(express.urlencoded({'extended':true}));
app.get('/category/:id', function (request, response) {
     let id = request.params.id;
     var sql = `SELECT title,description from category where id = ${id}`;
     console.log(sql);
     connection.con.query(sql, function (error, result, fields) {
          if (error)
               response.json({ 'error': error })
          else {
               var output = JSON.parse(JSON.stringify(result));
               response.json(output);
          }
     });
     // connection.con.end();
});
app.delete('/category/:id', function (request, response) {
     let id = request.params.id;
     var sql = `DELETE from category where id = ${id}`;
     connection.con.query(sql, function (error, result) {
          if (error)
               response.json({ 'error': error })
          else
               response.json({ 'message': 'Row deleted Successfully ' });
     });
});
app.post('/category', function (request, response) {
     console.log(request.body);
     var title = request.body.title;
     var photo = request.body.photo;
     var description = request.body.description;
     console.log(title);
     console.log(photo);
     console.log(description);
     var sql = `INSERT into category (title, photo, description) VALUES ('${title}', '${photo}', '${description}')`;
     console.log(sql);

     connection.con.query(sql, function (error, result) {
          if (error)
               response.json({ 'error': error });
          else
               response.json({ 'message': 'Category added successfully' });
     });
});
app.listen(5000);