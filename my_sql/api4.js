var connection = require('./api_connection');
var express = require('express');
var app = express();
var bodypareser = require('body-parser');

app.use(bodypareser.json());
app.use(bodypareser.urlencoded({ 'extended': true }))

app.post('/login', function (request, response) {
     // console.log("login called");
     let email = request.body.email;
     let user_password = request.body.password;

     let sql = `Select password,email from employee where email = '${email}'`;
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
                    if (user_password == result[0].password)
                    {
                        console.log(result[0])
                         response.json({ 'message': "Login Successfull " });
                    }
                    else {
                         response.json({ 'message': 'Invalid Login Attempt' });
                    }
               }
          }
     })
});
app.listen(5000);
// for 1st terminal node api4.js and than open login.html and select to the live server or view in browser opation select