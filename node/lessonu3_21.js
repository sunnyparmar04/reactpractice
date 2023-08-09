var http = require('http');
var url = require('url');
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'text/html' })
    var My_url = url.parse(request.url, true);
    console.log(My_url);

    if (My_url.pathname == '/profile') {
        let name = My_url.query.name;
        let age = My_url.query.age;
        console.log('my name is ', name, 'age is ', age)

        response.write(`<html>

        <head>
            <title></title>
        </head>
        
        <body>
            <h1>MY name is ${name}</h1>
            <h1>My age is ${age}</h1>
        </body>
        
        </html>`)
    }
});
server.listen(5000)
console.log('serever ready');