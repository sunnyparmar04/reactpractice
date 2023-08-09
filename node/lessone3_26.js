var events = require('events')
var http = require('http')
var server = http.createServer(function (request, respose) {
    var em = new events.EventEmitter();

    var switchOnFunction = function (data) {
        console.log("switch on event called " + data);
    }
    var switchOffFunction = function (data) {
        console.log("switch Off event called " + data);
    }
    em.on('switchonEvent', switchOnFunction);
    em.on('switchoffEvent', switchOffFunction);
    em.emit('switchonEvent', 'pc');
    em.emit('switchoffEvent', 'pc');
    em.removeListener('switchonEvent',switchOnFunction);
    em.emit('switchonEvent', 'light');
    em.emit('switchoffEvent', 'light');

});
server.listen(3000);
console.log('server is ready');