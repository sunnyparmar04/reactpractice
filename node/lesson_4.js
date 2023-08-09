var http = require('http');
var module2 = require("./module_2");
var server = http.createServer(function (request, response) {

    module2.info("hello");
    module2.warning("Please start server");
    module2.error("Missing semi colon");
});
server.listen(5000);
console.log("server ready....")