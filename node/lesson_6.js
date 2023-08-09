var http = require("http");
var mod3 = require("./module_4")
var server = http.createServer(function (request, response) {
    console.log(mod3.message);
    console.log(mod3.port);
    console.log("my name ", mod3.data.name, "is", "and my surname is", mod3.data.surname, "and my age is", mod3.data.age,);
});
server.listen(5000);
console.log("server ready")