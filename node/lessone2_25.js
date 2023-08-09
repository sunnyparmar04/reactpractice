var events = require('events')
var em = new events.EventEmitter();
em.on('walk', function (data) {
console.log('i walk '+data +"metter");

});
em.addListener('i paly ',function(data){
console.log('i played' +data + 'hours');
});
em.emit('walk ',100);
em.emit('play',1.4);

