var http = require('http')
var events = require('events')
var server = http.createServer(function (request, respose) {

    var em = new events.EventEmitter();
    em.on('switchOn', function(data){
        console.log('switchon' + data);
    });
    em.addListener('switchOff', function(data){
        console.log('switchoff' + data);
    });
    em.emit('switchOn',' light');
    em.emit('switchOff',' light');
    em.emit('switchOn',' pc');
    em.emit('switchOff',' pc');
});
server.listen(5000);
console.log('strver ready')