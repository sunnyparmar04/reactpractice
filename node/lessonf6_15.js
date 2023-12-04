var http = require('http')
var fs = require('fs')
var buf = new Buffer.alloc(1024)
var server = http.createServer(function (request, response) {

    fs.open('./pro4.html', 'r+', function (error, fd) {
        if (error) {
            console.log(error)
        }
        else {
            console.log('file opend ....');
            var noofcharater = buf.length;
            console.log(noofcharater);
            fs.read(fd, buf, 0, noofcharater, 0, function (error, count) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("total number of charater readed are ", count);
                }
            });
            fs.close(fd, function (error) {
                if (error)
                    console.log(error)
                else {
                    console.log("file closed successfully ");
                }
            });
        }
    });
});
server.listen(5000);
console.log("Server Ready ");