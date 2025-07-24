const {createReadStream} = require('fs');
const stream = createReadStream('./content/big.txt',{highWaterMark:90000});
// the default size is 64 kb but can be manipulated using the property 'highWaterMark '
// again an inbuild event 'data'. its a chunk of data
stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(err)=>{
    console.log(err)
})