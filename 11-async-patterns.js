const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.end('home page')
    }
    else if(req.url == '/about'){
        //now lets add a blocking code
        for(let i = 0 ; i < 1000 ; i++){
            for(let j = 0 ; j < 1000 ; j++){
                console.log(`${j}`);
            }
        }
        res.end('about page')
    }
    else
    res.end('err page')
})
server.listen(5000, ()=>{
    console.log('server listening 5000');
    
})