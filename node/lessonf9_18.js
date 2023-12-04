var http = require('http');
var fs = require('fs')
var server = http.createServer(function (request, response) {

    fs.readFile('./pro91.html', function (error, FileContent) {
        console.log('file read successfully');
        fs.appendFile('./pro9.html', FileContent, function (error) {
            if (error)
                console.log(error);
            else
                console.log("content appended successfully ");
        })
    });
});
server.listen(5000);
console.log('server ready ');