var http =require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function(request,response){

     var my_url = url.parse(request.url,true);
     console.log(my_url);
     console.log(my_url.path);
     var filename = '.'+my_url.path;
     console.log(filename);
     fs.readFile(filename,function(error,content){
          if(error)
          {    
               response.writeHead(404,{'content-type':'text/html'});
               return response.end('NO Page Found ');
          }
          else
          {
               response.writeHead(200,{'content-type':'text/html'})
               response.write(content);
               return response.end();
          }
     });
});
server.listen(5000);
console.log("Server ready ");

// run karava mate url type krvu
// http://localhost:5000/profile.html