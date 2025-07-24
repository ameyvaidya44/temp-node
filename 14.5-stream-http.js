// var http = require('http')
// var fs = require('fs');
// const { error } = require('console');
// http.createServer(function(req, res){
//     // const text = fs.readFileSync('./content/big.txt', 'utf8')
//     // res.end(text)
//     const fileStream = fs.createReadStream('./content/big.txt','utf8');
//     fileStream.on('open',()=>{
//         fileStream.pipe()

//     })
//     fileStream.on('error', (err)=>{
//         res.end(err)
//     })
// }).listen(5000)

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');

    // Pipe the file stream directly to the response
    fileStream.on('open', () => {
        fileStream.pipe(res);
    });

    // Handle any errors that occur while reading the file
    fileStream.on('error', (err) => {
        res.end('Error reading file: ' + err.message);
    });
}).listen(5000);
