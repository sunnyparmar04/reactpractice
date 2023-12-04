//import modual 
var http = require('http');
//create server that has function which will run when request is received....
var server = http.createServer(function (request, response) {
    console.log('reseved request');
});
//server port mostly use 5000
server.listen(5000);
console.log('ready to accept request...');