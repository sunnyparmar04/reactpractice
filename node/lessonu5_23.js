// Write a programe to findout zodiac sign 
// localhost:5000/zodiac?month=2&day=10
// https://i.pinimg.com/564x/43/aa/50/43aa50c918f3bd03abb71b6d4aaf93c7.jpg
// https://in.pinterest.com/pin/81698180718875314/
var http = require('http')
var url = require('url')
var server = http.createServer(function(request,response){
     var my_url = url.parse(request.url,true);
     console.log(my_url);
     if(my_url.pathname == '/zodiac')
     {
          let month = my_url.query.month;
          let day = my_url.query['day'];
          console.log("month is ",month,"day is ",day);

          if(month == 3 && day >=21 && day<=31 || month == 4 && day <= 19  && day>0)
          {
               console.log("your zodiac sign is aries and symbol is ram");
          }
          else if(month == 4 && day >= 20 && day<=30 || month== 5 && day <=20 && day>0)
          {
               console.log("your zodiac sign is tarus and symbol is the bull ");
          }
     }
});
server.listen(5000)
console.log("server ready ");
