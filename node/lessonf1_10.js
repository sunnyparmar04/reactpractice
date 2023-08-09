
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    fs.readFile('pro.html', function (error, fileContent) {
        if (error) {
            console.log(error);
        }
        else {
            response.writeHead(200,{'content-type':'text/html'});
            response.write(fileContent);
            response.end();
            console.log('data readed...');
        }
    })

});
server.listen(5000);
console.log('server ready ....')