var http = require('http')
var url = require('url')
var server = http.createServer(function (request, response) {
    var My_url = url.parse(request.url, true);
    console.log(My_url);
    if (My_url.pathname == '/power_exponent_calc') {
        let power = parseInt(My_url.query.power);
        let base = parseInt(My_url.query.base);
        console.log("the value of power is", power, "value of base ", base);
        let answer = 0;
        let count = 0;
        answer = base * base;
        for (count = 2; count < power; count++) {
            answer = answer * base;
        }
        // 4 * 2  = 8 
        // answer = answer * base; // 8 * 2 = 16
        // answer = answer * base;// 16 * 2 = 32 
        console.log("Answer is ", answer);
    }
});
// /http://localhost:5000/power_exponent_calc?power=2&base=2
server.listen(5000);
console.log("server ready");