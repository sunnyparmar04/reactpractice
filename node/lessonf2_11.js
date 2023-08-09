var http =require('http');
var fs =require('fs');
var server=http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'})
 var data =fs.readFileSync('./pro2.html');
 response.write(data);
 console.log('read....')
 response.end();
});
server.listen(3000);
console.log('server read...');