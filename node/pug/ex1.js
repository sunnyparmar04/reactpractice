var express = require('express');
var app = express();
var mysql = require('mysql');
var bodypareser = require('body-parser')
app.use(bodypareser.json());
app.use(bodypareser.urlencoded({ 'extended': true }));
app.set('view engine', 'pug');
app.set('views', 'template');
const con = mysql.createConnection({
     host: 'localhost',
     port: 3306,
     user: 'root',
     password: '',
     database: 's'
});
con.connect(function (error) {
     if (error) {
          console.log(error);
     }
     else {
          console.log("Connection Established... ");
     }
});

   app.post('/login', function (request, response) {
     console.log("login called");
     let email = request.body.email;
     let user_password = request.body.password;

     let sql = `Select password,email,attempt from employee where email = '${email}'`;
     console.log(sql);
    con.query(sql, function (error, result) {
          if (error) {
               response.json({ 'error': error })
          }
          else {
               console.log(result);
               if (result.length <= 0) {
                    response.json({ 'message': 'Invalid Login Attempt' });
               }
               else {
                    if (result[0].attempt < 3) {
                         if (user_password == result[0].password) {
                              response.json({ 'message': "Login Successfull " });
                              let sql = `Update employee set attempt = 0 where email = '${email}'`
                              con.query(sql, function (error, result) { });
                         }
                         else {
                              let total_atempt = result[0].attempt + 1;
                              let sql = `Update employee set attempt = ${total_atempt} where email = '${email}'`
                              con.query(sql, function (error, result) { });
                              response.json({ 'message': 'Invalid Login Attempt' });
                         }
                    }
                    else
                    {
                         response.json({ 'message': 'Too Many tries try 24 hours block your user ' });
                    }
               }
          }
     })
});
app.get('/login', function (request, response) {
     response.render('ex11');
   });
app.listen(5000);
console.log("Server ready ");

