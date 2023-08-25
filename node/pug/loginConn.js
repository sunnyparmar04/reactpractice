// offices 
const { json } = require('body-parser');
var express = require('express');
var app = express();
var mysql = require('mysql');
app.set('view engine','pug');
app.set('views','template');
var con = mysql.createConnection({
     'host': 'localhost', 'port': 3306, 'user': 'root', 'password': '', 'database': 'company'
});
con.connect(function (error) {
     if (error)
          console.log(error)
     else
          console.log("Connection established ");
});
app.get('/offices', function (request, response) {
     var sql = "Select * from offices";
     con.query(sql, function (error, result) {
          if (error)
               console.log(error);
          else {
               console.log(result);
               var output = JSON.parse(JSON.stringify(result));
               console.log(output);
               response.render('lesson8',{'data' : output})
          }
     });
});
app.listen(5000);
console.log("Server ready ");