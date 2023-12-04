
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
            console.log('data readed...');
            response.end();
        }
    })
});
server.listen(5000);
console.log('server ready ....')