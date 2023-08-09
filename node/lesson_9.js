
var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'application/json' })

    var url = request.url;
    if (url = '/profile') {
        var data = {
            name: 'sunny',
            surname: 'parmar',
            age: 26
        }
        var string_data = JSON.stringify(data);
        console.log(string_data)
    }
});
server.listen(5000);
console.log('server ready ....')