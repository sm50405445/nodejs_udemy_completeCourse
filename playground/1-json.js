const fs = require('fs');

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json")
// const JSONData = JSON.parse(dataBuffer);
// const author = JSONData.author;
// console.log(author)


const inputJsonData = {
    name: 'LeeSangMin',
    age: '27',
    planet: 'moon'
}
const writeJsonData = JSON.stringify(inputJsonData);
fs.writeFileSync('1-json.json', writeJsonData);
const bufferData = fs.readFileSync('1-json.json');
const JSONData = JSON.parse(bufferData)
console.log(JSONData.name)