var connection = require('./api_connection');
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.post('/category', function (request, response) {
    console.log(request.body);
    let customerName = request.body.customerName;

    console.log(customerName);

    var sql = `INSERT into customers (customerName) Values(${customerName})`;
    console.log(sql);

    connection.con.query(sql, function (error, result) {
        if (error)
            response.json({ 'error': error });
        else
            response.json({ 'message': 'Category added successfully ' });
    });
});
app.listen(5000);
