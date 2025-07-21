const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.write('Welcome to out home page')
        // console.log(req)
        res.end()
    }
    else if(req.url =="/about"){
        res.end('Heres our short history')
    }else{
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back home</a>
        `
        )}
    console.log(req); // displays the req
    
})

server.listen(5000)


