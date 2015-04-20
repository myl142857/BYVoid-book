//event.js

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function(argv1, argv2){
    console.log('listener1', argv1, argv2);
});

event.on('some_event', function(argv1, argv2){
    console.log('listener2', argv1, argv2);
});

setTimeout(function(){
    event.emit('some_event', 'byvoid', 1991);
}, 1000);
