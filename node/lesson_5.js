var http = require("http");
var mod3 = require ("./module_3");
var server = http.createServer(function (request, response) {

mod3.rupeesToDoller(100);
mod3.repeesToPound(100);
});
server.listen(5000);
console.log("ready for boom");