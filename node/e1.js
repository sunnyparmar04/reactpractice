var http = require('http');
var events =require('events')
var server = http.createServer(function(request,respose){
    var em = new events.EventEmitter();
    em.on('switchOn',function(data){
        console.log('switchOn'+data)
    });
    em.on('switchOff',function(data){
        console.log('switchOff'+data)
    });
em.emit('switchOn', 'light ');
em.emit('switchOff', 'light ');
});
server.listen(5000);
console.log('server ready');
