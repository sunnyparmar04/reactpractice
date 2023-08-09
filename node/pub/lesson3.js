var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', 'template');
app.get('/about_us', function (request, response) {

     let data = {
          "students": ['param', 'jimmy', 'sunnybhai', 'manishbhai']
     };
     response.render('lesson5', data);
});
app.get('/loop2', function (request, response) {

     let data = {
          "students": ['param', 'jimmy', 'sunnybhai', 'manishbhai']
     };
     response.render('lesson6', data);
});
app.get('/loop3', function (request, response) {

     let data = {
          "students": [
               { 'name': 'Param patel', 'age': 19, 'weight': 45.45 },
               { 'name': 'Sahil', 'age': 19, 'weight': 45.45 },
               { 'name': 'Jimmy', 'age': 19, 'weight': 45.45 }
          ]
     };
     response.render('lesson7', data);
});
app.listen(5000);
console.log("Server Ready....");