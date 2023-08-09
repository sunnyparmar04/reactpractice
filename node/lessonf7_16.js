var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response){

     fs.unlink('./pro7.html',function(error){
        if (error){
            console.log(error);
            console.log('file not deleted');
        }
        else
        {
            console.log('file deleted ');
        }
     });
});
server.listen(5000);
console.log("Server ready ...");