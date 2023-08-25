var connection = require('./api_connection');
var express = require('express');
var app = express();
var bodypareser = require('body-parser');

app.use(bodypareser.json());
app.use(bodypareser.urlencoded({ 'extended': true }));

app.post('/login', function (request, response) {
     // console.log("login called");
     let email = request.body.email;
     let user_password = request.body.password;

     let sql = `Select password,email,attempt from employee where email = '${email}'`;
     console.log(sql);
     connection.con.query(sql, function (error, result) {
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
                              connection.con.query(sql, function (error, result) { });
                         }
                         else {
                              let total_atempt = result[0].attempt + 1;
                              let sql = `Update employee set attempt = ${total_atempt} where email = '${email}'`
                              connection.con.query(sql, function (error, result) { });
                              response.json({ 'message': 'Invalid Login Attempt' });
                         }
                    }
                    else {
                         response.json({ 'message': 'Too Many tries try 24 hours block your user ' });
                    }
               }
          }
     })
});
app.listen(5000);

// for 1st terminal node api5.js and than open login.html and select to the live server or view in browser opation select