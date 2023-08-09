var http = require("http");
var mod5 = require("./module_5");
var server = http.createServer(function (request, respose) 
{
    var p1 = new mod5("sunny", 20);
    p1.GetInfo();
    p1.Walk();
});
server.listen(5000);
console.log("server ready");
