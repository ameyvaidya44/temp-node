const { writeFileSync } = require('fs')

// streams are used to read and write data sequentially
for(let i = 0 ; i < 10000 ; i++)
{
    writeFileSync('./content/big,txt', `hello world ${i}\n`, {flag: 'a'})
}