var http = require('http')
var events = require('events')
var server = http.createServer(function (request, respose) {
    var em = new events.EventEmitter();
    em.on('walk', function (data) {
        console.log('walk ' + data + ' metter');
    });
    
    em.addListener('paly', function (data) {
        console.log('play ' + data + ' hours');

    });
    em.emit('walk', '100');
    em.emit('paly', '1.4');
});
server.listen(5000);
console.log('strver ready')

