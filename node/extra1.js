var http = require('http')
var my = require('./mymodule')
var server = http.createServer(function(request,response){
    var currentdate = my.getDate();
    var currenttime = my.getTime();
    console.log(currentdate);
    console.log(currenttime);
});
var portno = 5000;
server.listen(portno);
console.log('ready to accept request');

function getCurrentDate()
{
    var date = new Date();
    var currentdate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    return currentdate;
}
function getCurrentTime()
{
    var date = new Date();
    var currenttime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return currenttime;
}
//export function 
module.exports.getDate = getCurrentDate;
module.exports.getTime = getCurrentTime;