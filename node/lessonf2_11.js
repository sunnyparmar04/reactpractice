var http =require('http');
var fs =require('fs');
var server=http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'})
    var data =fs.readFileSync('./pro2.html');
 response.write(data);
//  response.end();
 console.log('read....')
});
server.listen(5000);
console.log('server read...');