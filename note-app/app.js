const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./note.js');

console.log(getNotes());
console.log(validator.isEmail("sd50712naver.com"));
const msg = chalk.green.bold.inverse('Success!');
console.log(msg);

console.log(process.argv[2]);


// const add = require('./utils.js');
// const value = add(4, -2);
// console.log(value);