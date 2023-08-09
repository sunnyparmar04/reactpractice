var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    var data = 'sunny parmar';
    fs.writeFile('/pro2', data, function (error) {
        if(error)
        console.log(error);
        else
        {
            console.log("file written successfully");
        }
    });
});
server.listen(3000);
console.log('server ready......');