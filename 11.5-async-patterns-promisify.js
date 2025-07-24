const { readFile , writeFile} = require('fs').promises

// this lets us use async/await as it "promisifies" the shit for us
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)




const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mine=grenade.txt',`this is pretty awesome!!`)
        console.log(first, second);
        
    } catch (error) {
        console.log(error);
    }
}
start() 


// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch((err)=>console.log(err))

// without promisify
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }jj