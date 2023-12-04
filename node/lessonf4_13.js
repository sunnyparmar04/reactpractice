var http = require('http');
var fs = require("fs")
var server = http.createServer(function (request, response) {
    var data = "\n mengo apple ";
    fs.appendFile('./pro37.html', data, function (error) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Append function completed');
        }
    });
});
server.listen(5000);
console.log("server ready....")