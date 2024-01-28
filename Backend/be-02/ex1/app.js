const EventEmitter = require('events');

const greet = new EventEmitter();

greet.on('response', (name)=>{
    console.log(`Hello ${name}!`)
})

greet.emit('response','Bartholomew');