var events = require('events');
var em = new events.EventEmitter();
var swtichon = function (data)
{
    console.log("switch on function call  ",data);
}
var switchoff = function (data)
{
    console.log("switch off function call ",data);

}
em.on('SwitchOn', swtichon);
em.addListener('SwitchOff', switchoff);

em.emit('SwitchOn','fan');
em.emit('SwitchOff', 'fan');
em.removeAllListeners('SwitchOn',swtichon);;
em.emit('SwitchOn', 'light');