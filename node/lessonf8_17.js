var http = require('http')
var fs = require('fs')
var server = http.createServer(function (request, response) {
    fs.rename('pro8.html', 'pro8rename.html', function (error) {
        if (error)
            console.log(error)
        else {
            console.log('file rename successfully')
        }
    });
});
server.listen(5000)
console.log("Server ready ");