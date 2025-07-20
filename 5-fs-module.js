const {readFileSync, writeFileSync, write} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, second);

writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`,{flag:'a'})
//1st argument - location of the file
//2nd argument - content to write
//3rd argument (opt) - flag 'a' to append