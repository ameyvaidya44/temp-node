// const { john, peter } = require("./1.1-first-module");
const names = require('./1.1-first-module');

const sayHi = (name) => {
    console.log(`Hello there ${name}`);   
}
// sayHi(john)
sayHi(names.peter)
// console.log(names);
require('./2-mind-grenade')