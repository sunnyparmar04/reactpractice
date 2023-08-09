// 1 - > addition 
// 2 - > subtraction 
// 3 - > multiplication 
// 4 - > divsion 
// 5 - > maximum 
// 6 - > minimum
// 7 -> equality
http://localhost:5000/calc?number1=10&number2=20&option=1 
var http = require('http');
const { parse } = require('path');
var url = require('url')
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'text/html' })
    var My_url = url.parse(request.url, true);
    if (My_url.pathname = '/calc') {
        let number1 = parseInt(My_url.query.number1);
        let number2 = parseInt(My_url.query.number2);
        let option = parseInt(My_url.query.option);
        let answer = 0;
        if (option == 1) {
            answer = number1 + number2;
        }
        else if (option == 2) {
            answer = number1 - number2;
        }
        else if (option == 3) {
            answer = number1 * number2;
        }
        else if (option == 4) {
            answer = number1 / number2;
        }
        else if (option == 5) {
            answer = Math.max(number1, number2);
        }

        else if (option == 6) {
            answer = Math.min(number1, number2);
        }
        else if (option == 7) {
            if (number1 == number2) {
                answer = "both are same ";
            }
            else {
                answer = "both are not same ";
            }
        }
        response.write(`
        <html>
        <head>
             <title></title>
        </head>
        <body>
             <h1>Number 1 is : ${number1}</h1>
             <h1>Number 2 is :  ${number2}</h1>
             <h1>Answer is :  ${answer}</h1>
        </body>
        </html>`)
    }
    response.end();
});
server.listen(5000);
console.log('server ready...');