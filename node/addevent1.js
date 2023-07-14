var events = require('events');
var em = new events.EventEmitter();

em.on('on', (message) => {
    console.log("on event triggered ...",message);

})

em.addListener('off', function (message)
{
    console.log("off event triggered .",message);

})


em.emit('on', 'fan');
em.emit('off', 'light');

