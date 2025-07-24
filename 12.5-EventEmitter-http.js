const http = require('http')

//const server = http.createServer((req, res)=>{
//     res.end('Welcome')    
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subscirbe to it / listen for it / respond to it
server.on('request', (req, res)=>{
    res.end('Welcome')
})
// the event name is 'request' here as the http server emits that event which we here listen to and display 'Welcome', it is basically the 

//Event 'request' - Emitted each time there is a request. There may be multiple requests per connection (in the case of HTTP Keep-Alive connections).


server.listen(5000)