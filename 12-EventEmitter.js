const EventEmitter = require('events');
const customEmitter = new EventEmitter()
customEmitter.on('response',()=>{
    console.log(`data recieved`);
})
customEmitter.on('anotherResponse',(name, id)=>{
    console.log(`data received ${name} with ${id}`);
}) // we can also have multiple on functions for a same event


customEmitter.emit('response') // the order matters, we first listen to the event and then we emit it after
customEmitter.emit('anotherResponse', 'amey', 74)