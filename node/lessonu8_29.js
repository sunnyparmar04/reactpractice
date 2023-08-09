// Create a factorail clac
// localhost:5000/factorail?number=5
// 5*4*3*2*1 = 120
var http = require('http');
var url = require('url');
var events = require('events');
var server = http.createServer(function (request, respose) {
    var em = new events.EventEmitter();
    var my_url = url.parse(request.url, true);
    console.log(my_url);
    if (my_url.pathname == '/factorail') {
        let number = parseInt(my_url.query.number);
        em.addListener('factorial', function (number) {
            let answer = 1;
            let count = 0;
            if (number > 0) {
                // answer = number * (number - 1)
                for (count = 0; count < number; count++) {
                    answer = answer * (number - count);
                }
                console.log("answer is ", answer);
                // answer = answer * (number - 3);
                // answer = answer * (number - 4);  
            }
            else {
                console.log("Invalid input ");
            }

        });
        em.emit('factorial', number);
    }
});
// localhost:5000/factorail?number=5

server.listen(5000);
console.log("Server ready ");