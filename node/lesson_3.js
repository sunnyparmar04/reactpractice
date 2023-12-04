var http =require('http');
var my = require ('./mymodule_1');
var server= http.createServer(function(request,response){
    var todaydate =my.getdate();
    console.log(todaydate);
    var time =my.gettime();
    console.log(time);
});
server.listen(3000);
console.log('ready for received request');


