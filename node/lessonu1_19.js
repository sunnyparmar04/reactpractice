var http = require('http')
var url = require('url')
var server = http.createServer(function(request,response){

    // run krava mate http://localhost:5000/?id=1&name=sunny
     var my_url = url.parse(request.url,true);
     // console.log(my_url);
     var data = my_url.query
     console.log(data);
     console.log(data.id);
     console.log(data.name);
});
server.listen(5000);
console.log("server ready ");