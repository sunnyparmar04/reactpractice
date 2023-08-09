var http = require('http')
var fs = require('fs')
var server = http.createServer(function(request,response){

    fs.appendFileSync('./pro3.html','\n sunny');
    console.log('append sync complited')
});
server.listen(5000);
console.log("Server Ready ");