var http = require("http");
var server = http.createServer(function (request, response) {

    var url = request.url;
    response.writeHead(200, {"content-type": "text / html"});
if (url == '/') {
    response.write('home123')
}
else if (url == '/pro') {
    response.write("pro")
}
response.end()
});
server.listen(5000);

// var http = require('http');
// var server = http.createServer(function (request, response){
// console.log("hello");
// console.log(request.url);
// var url = request.url;
// response.writeHead(200,{'content-type':'text/html'});

// if(url=='/'){
//     response.write("home")
// }
// else if (url== '/product'){
//     response.write("this is product page")

// }
// else if (url== '/category'){
//     response.write("this page is category page")
// }
// response.end()
// });
// server.listen(5000);
// console.log("server ready");