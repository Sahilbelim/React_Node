var events = require("events");
var em = new events.EventEmitter();
var swtichon = function (data) {
  console.log("switch on function call  ", data);
};

var switchoff = function (data) {
  console.log("switch off function call ", data);
};
em.once("SwitchOn", swtichon);
em.once("SwitchOff", switchoff);

em.emit("SwitchOn", "fan");
em.emit("SwitchOn", "light");
em.emit("SwitchOff", "fan");
em.emit("SwitchOff", "light");
em.removeAllListeners("SwitchOn", swtichon);
