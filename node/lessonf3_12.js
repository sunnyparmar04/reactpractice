var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    var data = 'sunny  g parmar';
    fs.writeFile('./pro2.html', data, function (error) {
        if(error)
        console.log(error);
        else
        {
            // response.write();
            console.log("file written successfully");
        }
    });
});
server.listen(5000);
console.log('server ready......');