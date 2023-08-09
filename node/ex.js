// Example to read file using readfile function 
var http = require('http')
var fs = require('fs')
var server = http.createServer(function (request, response) {

     response.writeHead(200, { 'content-type': 'text/html' });
     fs.readFile('temp.html', function (error, filecontent) {
          var data = "\n" + filecontent
          fs.appendFile('temp2.html', data, function (error) {

               if (error) {
                    console.log(error);
               }
               else {
                    console.log("Append function completed ");
               }
          });
     });
     fs.readFile('temp2.html', function (error, data2) {
          response.write(data2);
          
          return response.end();
     }
     );
});
server.listen(3000)
console.log("Server ready ");