var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', 'template');


app.get('/cricket', function (request, response) {

     let data = [
        { name: 'sachin tendulkar', runs: 15268, wickets: 100 },
        { name: 'virat kohli', runs: 10256, wickets: 12 },
        { name: 'yuvrajsinh', runs: 8526, wickets: 10 },
        { name: 'ishan kishan', runs: 526, wickets: 15 },
        { name: 'hardik pandya ', runs: 2536, wickets: 25 },
        { name: 'suresh dhawan', runs: 15166, wickets: 5 },
        { name: 'suresh rena', runs: 9895, wickets: 4 },
        { name: 'rohit sharma', runs: 551, wickets: 2 },
        { name: 'chahal', runs: 1515, wickets: 20 },
        { name: 'harkik', runs: 54842, wickets: 10 },
        { name: 'ms dhoni', runs: 51555, wickets: 9 },
        { name: 'virat ', runs: 2515, wickets: 20 }
      ];
     response.render('ex2.pug', {data});
});
app.listen(5000);
console.log("Server Ready....");